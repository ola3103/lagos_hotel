import { Link } from "react-router-dom"

const RoomsHeroSection = () => {
  return (
    <>
      <div className="room_hero_banner">
        <Link to="/book-room">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 243.58"
            color="white"
            fill="white"
            width={24}
          >
            <path
              fillRule="nonzero"
              d="M138.43 243.58 0 122.84 140.47 0l20.92 23.91-94.92 83 445.53-.42v31.75l-445.54.41 92.89 81.02z"
            />
          </svg>
          <p>Back to Booking Page</p>
        </Link>
      </div>
      <section className="room_hero">
        <div className="room_hero_bg">
          <div className="room_hero_bg_overlay"></div>
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1720029261/pexels-clarence-middleton-124350-381541_mzafgw.jpg"
            alt=""
          />
        </div>
        <div className="room_hero_text">
          <h1>Lagos Hotel</h1>
          <p>Luxury, Comfort, Elegance, Serenity, Delight</p>
        </div>
      </section>
    </>
  )
}

export default RoomsHeroSection
