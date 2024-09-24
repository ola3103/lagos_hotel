import { Link } from "react-router-dom"

const SectionThree = () => {
  return (
    <section className="section_three">
      <div className="container">
        <h1 className="section_three_title">THE LAGOS BAR</h1>
        <div className="section_three_container">
          <div className="section_three_side_one">
            <p className="section_three_side_one_text_one">
              Welcome to The Lagos Bar, where elegance meets comfort. Our bar
              offers a refined atmosphere perfect for unwinding after a long day
              or enjoying a night out. With an extensive selection of fine
              wines, craft cocktails, and premium spirits, we cater to every
              palate. Whether you&apos;re here to relax or celebrate, The Lagos
              Bar is your destination for a sophisticated and enjoyable
              experience.
            </p>
            <ul className="section_three_side_one_text_two">
              <li>Sophisticated Elegance</li>
              <li>Inviting Ambiance</li>
              <li>Modern Charm</li>
              <li>
                <Link to="/the-lagos-bar">EXPLORE</Link>
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718293971/4485350_mgxbku.jpg"
            alt="Lagos Bar image"
            className="section_three_side_two"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionThree
