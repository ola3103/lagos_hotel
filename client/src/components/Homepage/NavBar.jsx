import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav_bar">
      <Link to="/" className="hero_logo">
        <img
          src="https://res.cloudinary.com/dxaujswz7/image/upload/v1727182090/white_logo_fwmkk4.png"
          alt="logo"
        />
      </Link>
      <Link to="/book-room" className="book_room_link">
        Book Room
      </Link>
    </nav>
  )
}

export default NavBar
