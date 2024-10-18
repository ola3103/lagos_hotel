import { GlobalHotelContext } from "../../context/HotelContext"

const RoomsHeroSectionBottom = () => {
  const { hotelDateState, setHotelDateState } = GlobalHotelContext()

  return (
    <section className="room_hero_section_bottom">
      <div className="room_hero_section_bottom_container">
        <div className="room_hero_section_bottom_1">
          <p className="room_hero_section_bottom_1_top">YOUR DATES</p>
          <button className="room_hero_section_bottom_1_bottom">
            <p className="room_hero_section_bottom_1_bottom_1">
              <span className="room_hero_section_bottom_1_bottom_1_icon">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0.5C5.27614 0.5 5.5 0.723858 5.5 1V4C5.5 4.27614 5.27614 4.5 5 4.5C4.72386 4.5 4.5 4.27614 4.5 4V1C4.5 0.723858 4.72386 0.5 5 0.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 0.5C15.2761 0.5 15.5 0.723858 15.5 1V4C15.5 4.27614 15.2761 4.5 15 4.5C14.7239 4.5 14.5 4.27614 14.5 4V1C14.5 0.723858 14.7239 0.5 15 0.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 7.5H1V6.5H19V7.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 15C8.55228 15 9 14.5523 9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 3H1V17H19V3ZM1 2C0.447715 2 0 2.44772 0 3V17C0 17.5523 0.447715 18 1 18H19C19.5523 18 20 17.5523 20 17V3C20 2.44772 19.5523 2 19 2H1Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="room_hero_section_bottom_1_bottom_1_text">
                Dates
              </span>
            </p>
            <p className="room_hero_section_bottom_1_bottom_2">
              <span className="room_hero_section_bottom_1_bottom_2_1">
                {hotelDateState.checkInDate}
              </span>
              <span className="room_hero_section_bottom_1_bottom_2_2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 243.58"
                >
                  <path
                    fillRule="nonzero"
                    d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
                  />
                </svg>
              </span>
              <span className="room_hero_section_bottom_1_bottom_2_3">
                {hotelDateState.checkOutDate}
              </span>
            </p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default RoomsHeroSectionBottom
