import { useState, useEffect } from "react"
import axios from "axios"
import SingleRoom from "./SingleRoom"

const RoomsBodySection = () => {
  const [rooms, setRooms] = useState([])

  const handleRoomData = async () => {
    try {
      const response = await axios.get("http://localhost:5070/api/v1/room")
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
