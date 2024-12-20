import { useEffect, useState } from "react"
import RoomDetailsBanner from "../components/Room-Details/RoomDetailsBanner"
import RoomDetailsBody from "../components/Room-Details/RoomDetailsBody"
import RoomDetailsPreview from "../components/Room-Details/RoomDetailsPreview"
import axios from "axios"
import { useParams } from "react-router-dom"
import BookingInfoPageFooter from "../components/Room-Details/RoomDetailsFooter"

const RoomDetails = ({ setHasChoosenRoom }) => {
  const [singleRoom, setSingleRoom] = useState({})

  const { roomId } = useParams()

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_BASE_URL_PROD ||
            import.meta.env.VITE_API_BASE_URL_DEV
          }/api/v1/room/${roomId}`
        )
        // const response = await axios.get(
        //   `${import.meta.env.VITE_API_BASE_URL_DEV}/api/v1/room/${roomId}`
        // )
        setSingleRoom(response.data.room)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRoomData()
  }, [roomId])

  if (!singleRoom) {
    return <p>Loading</p>
  }

  return (
    <section className="room_details_section">
      <div className="room_details_container">
        <RoomDetailsBanner roomName={singleRoom.name} />
        <RoomDetailsPreview roomImg={singleRoom.images} />
        <RoomDetailsBody
          room={singleRoom}
          setHasChoosenRoom={setHasChoosenRoom}
        />
        <BookingInfoPageFooter />
      </div>
    </section>
  )
}

export default RoomDetails
