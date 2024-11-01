import { useState, useEffect } from "react"
import axios from "axios"
import SingleRoom from "./SingleRoom"
import { GlobalHotelContext } from "../../context/HotelContext"
import { format, parse } from "date-fns"
import Loader from "../../pages/Loader"

const RoomsBodySection = ({ setHasChoosenRoom }) => {
  const [rooms, setRooms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { hotelDateState } = GlobalHotelContext()

  const convertToFullDate = (dateString, year = new Date().getFullYear()) => {
    const parsedDate = parse(`${dateString} ${year}`, "MMM d yyyy", new Date())

    return format(parsedDate, "yyyy-MM-dd")
  }

  const checkInDate = convertToFullDate(hotelDateState.checkInDate)
  const checkOutDate = convertToFullDate(hotelDateState.checkOutDate)

  const handleRoomData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL_PROD
        }/api/v1/room?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      )

      setRooms(response.data.data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRoomData()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const allRooms = rooms.map((oneRoom) => {
    return (
      <SingleRoom
        key={oneRoom._id}
        room={oneRoom}
        setHasChoosenRoom={setHasChoosenRoom}
      />
    )
  })

  return (
    <section className="room_body_section">
      <div className="room_body_container">{allRooms}</div>
    </section>
  )
}

export default RoomsBodySection
