const LagosBarVideoBG = () => {
  return (
    <div className="lagosbar_video_bg_container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="lagosbar_video_background"
      >
        <source
          src="https://res.cloudinary.com/dxaujswz7/video/upload/v1718296206/4485547_pf855s.mp4"
          type="video/mp4"
        />
      </video>
      <div className="lagosbar_video_overlay">
        <h1>THE LAGOS BAR</h1>
        <p> where elegance meets comfort</p>
      </div>
    </div>
  )
}

export default LagosBarVideoBG
