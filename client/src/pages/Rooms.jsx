import RoomFooter from "../components/Rooms/RoomFooter"
import RoomsBodySection from "../components/Rooms/RoomsBodySection"
import RoomsHeroSection from "../components/Rooms/RoomsHeroSection"
import RoomsHeroSectionBottom from "../components/Rooms/RoomsHeroSectionBottom"

const Rooms = ({ setHasChoosenRoom }) => {
  return (
    <section>
      <RoomsHeroSection />
      <RoomsHeroSectionBottom />
      <RoomsBodySection setHasChoosenRoom={setHasChoosenRoom} />
      <RoomFooter />
    </section>
  )
}

export default Rooms
