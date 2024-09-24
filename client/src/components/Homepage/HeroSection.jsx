import NavBar from "./NavBar";
import VideoBackground from "./VideoBackground";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <NavBar />
      <div className="video_bg">
        <VideoBackground />
      </div>
    </section>
  );
};

export default HeroSection;
