const SectionOne = () => {
  return (
    <section className="section_one">
      <div className="container">
        <h1 className="section_one_title">OUR STORY</h1>
        <div className="section_one_container">
          <div className="section_one_side_one">
            <p className="section_one_side_one_text_one">
              In the heart of Lagos, our hotel started as a family-run inn with
              a dream of creating a home away from home. Drawing from our rich
              heritage and vibrant culture, we&apos;ve crafted an authentic and
              memorable experience. Our dedication to exceptional service and
              heartfelt hospitality has made visitors lifelong friends.
            </p>
            <ul className="section_one_side_one_text_two">
              <li>Central Location</li>
              <li>Tranquil Escape</li>
              <li>Elegant Comfort</li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718014852/1838554_z2sndk.jpg"
            alt="Our Story Image"
            className="section_one_side_two"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionOne
