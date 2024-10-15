const Footer = () => {
  return (
    <footer className="homepage_footer">
      <div className="footer_container container">
        <div className="footer_side_1">
          <h1 className="footer_title">Find Us On Instagram</h1>
          <p className="footer_side_1_text">
            @lagos_hotel
            <svg
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.623c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.671.31.392.144.746.374 1.036.673.3.291.53.645.674 1.036.123.318.27.794.31 1.672.043.949.052 1.233.052 3.636s-.01 2.688-.053 3.637c-.04.877-.186 1.354-.31 1.67a2.984 2.984 0 01-1.707 1.709c-.318.123-.794.27-1.672.31-.949.043-1.233.052-3.637.052-2.403 0-2.688-.01-3.636-.052-.878-.04-1.354-.187-1.672-.31a2.787 2.787 0 01-1.036-.674c-.299-.29-.529-.644-.673-1.036-.123-.317-.27-.793-.31-1.67-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.144-.391.374-.745.673-1.036.29-.3.645-.53 1.036-.673.318-.124.794-.27 1.672-.31.949-.043 1.233-.053 3.636-.053L12 4.623zM12.001 3c-2.444 0-2.75.01-3.71.054s-1.614.197-2.186.42c-.6.226-1.145.58-1.595 1.038-.457.45-.812.994-1.038 1.594-.222.572-.374 1.227-.418 2.185C3.011 9.249 3 9.557 3 12s.01 2.75.054 3.71.196 1.612.418 2.184c.227.6.58 1.144 1.038 1.594.45.458.994.812 1.595 1.038.572.223 1.227.375 2.185.419.958.043 1.266.054 3.71.054 2.445 0 2.752-.01 3.711-.054.96-.044 1.612-.196 2.184-.419a4.6 4.6 0 002.632-2.632c.223-.572.375-1.227.419-2.184.043-.958.054-1.267.054-3.711s-.01-2.75-.054-3.71-.196-1.612-.419-2.184a4.413 4.413 0 00-1.038-1.593 4.418 4.418 0 00-1.594-1.04c-.572-.222-1.227-.374-2.185-.417C14.752 3.012 14.444 3 12 3L12.001 3z"
                fill="currentColor"
              ></path>
              <path
                d="M12 7.379a4.622 4.622 0 100 9.243 4.622 4.622 0 000-9.243zM12 15a3.001 3.001 0 110-6.003 3.001 3.001 0 010 6.003zM16.805 8.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z"
                fill="currentColor"
              ></path>
            </svg>
          </p>
        </div>
        <div className="foot_side_2">
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187662/1028379_ilopri.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_2"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187663/3659683_np4pyu.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_3"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187662/6467621_jp8tkc.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_3"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718188000/2403017_yygsby.jpg"
            alt="footer_image"
          />
        </div>
      </div>
      <div className="footer_bottom_side">
        <ul className="footer_side_3 container">
          <li className="footer_link">TERMS OF USE</li>
          <li className="footer_link">PRIVACY POLICY</li>
          <li className="footer_link">ACCESSIBILITY</li>
          <li className="footer_link">CONTACT US</li>
          <li className="footer_link">FAQ</li>
        </ul>
        <div className="footer_side_4">
          <p className="booking_info_page_footer_text_1">Powered by</p>
          <p className="booking_info_page_footer_text_2">INDEX_ZER0</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
