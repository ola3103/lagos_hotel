import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import RoomFooter from "../components/Rooms/RoomFooter"
import RoomsBodySection from "../components/Rooms/RoomsBodySection"
import RoomsHeroSection from "../components/Rooms/RoomsHeroSection"
import RoomsHeroSectionBottom from "../components/Rooms/RoomsHeroSectionBottom"

const Rooms = () => {
  return (
    <section>
      <RoomsHeroSection />
      <RoomsHeroSectionBottom />
      <RoomsBodySection />
      <RoomFooter />
    </section>
  )
}

export default Rooms
