import { useState, useEffect } from "react"
import axios from "axios"
import SingleRoom from "./SingleRoom"
import { GlobalHotelContext } from "../../context/HotelContext"
import { format, parse } from "date-fns"

const RoomsBodySection = () => {
  const [rooms, setRooms] = useState([])
  const { hotelDateState } = GlobalHotelContext()

  const convertToFullDate = (dateString, year = new Date().getFullYear()) => {
    const parsedDate = parse(`${dateString} ${year}`, "MMM d yyyy", new Date())

    return format(parsedDate, "yyyy-MM-dd")
  }

  const checkInDate = convertToFullDate(hotelDateState.checkInDate)
  const checkOutDate = convertToFullDate(hotelDateState.checkOutDate)

  const handleRoomData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL_PROD ||
          import.meta.env.VITE_API_BASE_URL_DEV
        }/api/v1/room?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      )
      setRooms(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(rooms)

  useEffect(() => {
    handleRoomData()
  }, [])

  const allRooms = rooms.map((oneRoom) => {
    return <SingleRoom key={oneRoom._id} room={oneRoom} />
  })

  return (
    <section className="room_body_section">
      <div className="room_body_container">{allRooms}</div>
    </section>
  )
}

export default RoomsBodySection
