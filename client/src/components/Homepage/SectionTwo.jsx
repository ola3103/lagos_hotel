import { Link } from "react-router-dom"

const SectionTwo = () => {
  return (
    <section className="section_two">
      <div className="container">
        <h1 className="section_two_title">OUR ROOMS</h1>
        <div className="section_two_container">
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718058870/1743229_qp2md6.jpg"
            alt="Our Story Image"
            className="section_two_side_one"
          />
          <div className="section_two_side_two">
            <p className="section_two_side_two_text_one">
              Each of our rooms is designed to be a haven of tranquility and
              elegance, offering guests an unparalleled level of comfort and
              sophistication. From our cozy standard rooms to our spacious
              luxury suites, every detail has been thoughtfully considered to
              ensure a perfect stay. Enjoy plush bedding, modern furnishings,
              and state-of-the-art amenities, including high-speed Wi-Fi,
              flat-screen TVs, and well-appointed workspaces.Our bathrooms
              feature luxurious fixtures, premium toiletries, and indulgent rain
              showers. Whether you&apos;re here for business or leisure, our
              rooms provide the ideal retreat to relax, recharge, and experience
              the best in hospitality.
            </p>
            <ul className="section_two_side_two_text_two">
              <li>Plush Sanctuary</li>
              <li>Chic Serenity</li>
              <li>Opulent Space</li>
              <li className="section_two_side_two_text_two_link">
                <Link to="/book-room">Explore And Book Rooms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
