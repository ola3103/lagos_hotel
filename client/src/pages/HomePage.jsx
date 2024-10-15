import { useEffect, useState } from "react"
import Footer from "../components/Homepage/Footer"
import HeroSection from "../components/Homepage/HeroSection"
import HeroSectionBottom from "../components/Homepage/HeroSectionBottom"
import SectionFour from "../components/Homepage/SectionFour"
import SectionOne from "../components/Homepage/SectionOne"
import SectionThree from "../components/Homepage/SectionThree"
import SectionTwo from "../components/Homepage/SectionTwo"
import TopBanner from "../components/Homepage/TopBanner"

const HomePage = () => {
  const [popUpState, setPopUpState] = useState(false)

  useEffect(() => {
    if (popUpState) {
      document.body.classList.add("hide_room_page_scroll")
    } else {
      document.body.classList.remove("hide_room_page_scroll")
    }
  }, [popUpState])

  return (
    <>
      <section className="homepage">
        <TopBanner />
        <HeroSection />
        <HeroSectionBottom
          popUpState={popUpState}
          setPopUpState={setPopUpState}
        />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </section>
    </>
  )
}

export default HomePage
