const VideoBackground = () => {
  return (
    <div className="video_background_container">
      <video autoPlay loop muted playsInline className="video_background">
        <source
          src="https://res.cloudinary.com/dxaujswz7/video/upload/v1717747243/hero_bg_video_eqexpb.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero_overlay_content">
        <h1>Welcome to Lagos Hotel</h1>
        <p>Experience luxury like never become</p>
      </div>
    </div>
  );
};

export default VideoBackground;
