import { useEffect, useState } from "react"
import RoomDetailsBanner from "../components/Room-Details/RoomDetailsBanner"
import RoomDetailsBody from "../components/Room-Details/RoomDetailsBody"
import RoomDetailsPreview from "../components/Room-Details/RoomDetailsPreview"
import axios from "axios"
import { useParams } from "react-router-dom"
import BookingInfoPageFooter from "../components/Room-Details/RoomDetailsFooter"

const RoomDetails = () => {
  const [singleRoom, setSingleRoom] = useState({})

  const { roomId } = useParams()

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5070/api/v1/room/${roomId}`
        )
        setSingleRoom(response.data.room)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRoomData()
  }, [roomId])

  console.log(singleRoom)

  if (!singleRoom) {
    return <p>Loading</p>
  }

  return (
    <section className="room_details_section">
      <div className="room_details_container">
        <RoomDetailsBanner roomName={singleRoom.name} />
        <RoomDetailsPreview roomImg={singleRoom.images} />
        <RoomDetailsBody room={singleRoom} />
        <BookingInfoPageFooter />
      </div>
    </section>
  )
}

export default RoomDetails
