import Footer from "../components/Homepage/Footer"
import LagosBarHero from "../components/Lagos-Bar/LagosBarHero"
import LagosBarSectionOne from "../components/Lagos-Bar/LagosBarSectionOne"
import LagosBarSectionTwo from "../components/Lagos-Bar/LagosBarSectionTwo"

const LagosBar = () => {
  return (
    <>
      <LagosBarHero />
      <div className="lagosbar_bg">
        <LagosBarSectionOne />
        <LagosBarSectionTwo />
        <Footer />
      </div>
    </>
  )
}

export default LagosBar
