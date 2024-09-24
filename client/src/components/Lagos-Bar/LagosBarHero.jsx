import NavBar from "../Homepage/NavBar"
import LagosBarVideoBG from "./LagosBarVideoBG"

const LagosBarHero = () => {
  return (
    <section className="lagosbar_hero">
      <NavBar />
      <div className="lagosbar_video_bg">
        <LagosBarVideoBG />
      </div>
    </section>
  )
}

export default LagosBarHero
