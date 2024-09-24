import { DateRangePicker } from "react-date-range"
import { addDays, format } from "date-fns"
import { useState, useRef, useEffect } from "react"
import { GlobalHotelContext } from "../../context/HotelContext"

const RoomsHeroSectionBottom = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ])

  const formatDate = (date) => format(date, "MMM dd")

  const [calenderState, setCalenderState] = useState(false)
  const [noGuestState, setNoGuestState] = useState(false)
  const [guestCount, setGuestCount] = useState(2)

  const { hotelDateState, setHotelDateState } = GlobalHotelContext()

  const popupRef = useRef(null)
  const calendarRef = useRef(null)
  const noGuestRef = useRef(null)
  const popupGuestRef = useRef(null)

  const handleCalenderState = () => {
    setCalenderState((currentState) => !currentState)
  }

  const handleNoGuestState = () => {
    setNoGuestState((currentState) => !currentState)
  }

  const handleClickOutside = (event) => {
    if (
      (popupRef.current &&
        !popupRef.current.contains(event.target) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target)) ||
      (popupGuestRef.current &&
        !popupGuestRef.current.contains(event.target) &&
        noGuestRef.current &&
        !noGuestRef.current.contains(event.target))
    ) {
      setCalenderState(false)
      setNoGuestState(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleAddGuestCount = () => {
    setGuestCount((currentState) => currentState + 1)
    if (guestCount === 6) {
      setGuestCount(guestCount)
    }
  }

  const handleMinusGuestCount = () => {
    setGuestCount((currentState) => currentState - 1)
    if (guestCount === 1) {
      setGuestCount(guestCount)
    }
  }

  return (
    <section className="room_hero_section_bottom">
      <div className="room_hero_section_bottom_container">
        <div className="room_hero_section_bottom_1">
          <p className="room_hero_section_bottom_1_top">YOUR DATES</p>
          <button
            className="room_hero_section_bottom_1_bottom"
            onClick={handleCalenderState}
            ref={popupRef}
          >
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
                {/* {formatDate(state[0].startDate)} */}
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
                {/* {formatDate(state[0].endDate)} */}
                {hotelDateState.checkOutDate}
              </span>
            </p>
          </button>
          {calenderState && (
            <div className="room_date_picker" ref={calendarRef}>
              <DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false}
                months={1}
                minDate={addDays(new Date(), 0)}
                maxDate={addDays(new Date(), 30)}
                ranges={state}
                scroll={{ enabled: true }}
                direction="vertical"
              />
            </div>
          )}
        </div>
        <div className="room_hero_section_bottom_2">
          <p className="room_hero_section_bottom_2_top">NUMBER OF GUESTS</p>
          <button
            className="room_hero_section_bottom_2_bottom"
            onClick={handleNoGuestState}
            ref={popupGuestRef}
          >
            <p className="room_hero_section_bottom_2_bottom_1">
              <span className="room_hero_section_bottom_2_bottom_1_icon">
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
                    d="M10 8C11.933 8 13.5 6.433 13.5 4.5C13.5 2.567 11.933 1 10 1C8.067 1 6.5 2.567 6.5 4.5C6.5 6.433 8.067 8 10 8ZM10 9C12.4853 9 14.5 6.98528 14.5 4.5C14.5 2.01472 12.4853 0 10 0C7.51472 0 5.5 2.01472 5.5 4.5C5.5 6.98528 7.51472 9 10 9Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.36058 13.6207C2.07555 14.7839 1.57555 16.1661 1.4981 17.0439C1.47382 17.319 1.23116 17.5223 0.956084 17.4981C0.68101 17.4738 0.477694 17.2311 0.501966 16.9561C0.60098 15.8339 1.21274 14.2161 2.68948 12.8793C4.17641 11.5333 6.50821 10.5 10 10.5C13.4918 10.5 15.8237 11.5333 17.3106 12.8793C18.7873 14.2161 19.3991 15.8339 19.4981 16.9561C19.5224 17.2311 19.3191 17.4738 19.044 17.4981C18.7689 17.5223 18.5262 17.319 18.502 17.0439C18.4245 16.1661 17.9245 14.7839 16.6395 13.6207C15.3646 12.4667 13.2847 11.5 10 11.5C6.71538 11.5 4.63542 12.4667 3.36058 13.6207Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 17C0.5 16.7239 0.723858 16.5 1 16.5H19C19.2761 16.5 19.5 16.7239 19.5 17C19.5 17.2761 19.2761 17.5 19 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <span className="room_hero_section_bottom_2_bottom_1_text">
                Sleeps
              </span>
            </p>
            <p className="room_hero_section_bottom_2_bottom_2">
              {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
            </p>
          </button>
          {noGuestState && (
            <div className="no_guest_box" ref={noGuestRef}>
              <p className="no_guest_text">Number of guests</p>
              <div className="no_guest_btn">
                <span
                  className="no_guest_minus_btn"
                  onClick={handleMinusGuestCount}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5L21 11.5C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5L3 12.5C2.72386 12.5 2.5 12.2761 2.5 12Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
                <span className="no_guest_number">{guestCount}</span>
                <span
                  className="no_guest_add_btn"
                  onClick={handleAddGuestCount}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3.5C12.2761 3.5 12.5 3.72386 12.5 4L12.5 20C12.5 20.2761 12.2761 20.5 12 20.5C11.7239 20.5 11.5 20.2761 11.5 20L11.5 4C11.5 3.72386 11.7239 3.5 12 3.5Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5 12C20.5 12.2761 20.2761 12.5 20 12.5L4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5L20 11.5C20.2761 11.5 20.5 11.7239 20.5 12Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RoomsHeroSectionBottom
