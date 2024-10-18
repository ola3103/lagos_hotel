import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { addDays, format } from "date-fns"
import { useEffect, useState } from "react"
import { GlobalHotelContext } from "../../context/HotelContext"
import { useNavigate } from "react-router-dom"
import WarningPopUp from "./WarningPopUp"
import { UseAccess } from "../../context/AccessContext"

const HeroSectionBottom = ({ popUpState, setPopUpState }) => {
  const navigate = useNavigate()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ])

  const [hasNavigated, setHasNavigated] = useState(false)

  const { hasChooseDate, setHasChooseDate } = UseAccess()
  const { hotelDateState, setHotelDateState } = GlobalHotelContext()

  const handleHomepageBooking = () => {
    if (state[0].endDate > state[0].startDate) {
      setHotelDateState({
        checkInDate: format(state[0].startDate, "MMM d"),
        checkOutDate: format(state[0].endDate, "MMM d"),
      })
      setHasChooseDate(true)
    } else {
      setPopUpState(true)
      navigate("/")
      console.log("Check-out date must be later than check-in date.")
    }
  }

  useEffect(() => {
    if (hasChooseDate) {
      navigate("/rooms")
    }
  }, [hasChooseDate, navigate])

  return (
    <div className="hero_sec_bottom_main">
      {popUpState && (
        <div className="warning_popup_container">
          <WarningPopUp setPopUpState={setPopUpState} />
        </div>
      )}
      <div className="container">
        <div className="hero_sec_bottom">
          <div className="hero_sec_bottom_side_1">
            <h1 className="hero_sec_bottom_side_1_title">LAGOS HOTEL</h1>
            <div className="hero_sec_bottom_side_1_box">
              <img
                src="https://res.cloudinary.com/dxaujswz7/image/upload/v1719259655/pexels-mikhail-nilov-7820313_tii6v0.jpg"
                className="hero_sec_bottom_side_1_img"
              />
              <p className="hero_sec_bottom_side_1_text">
                Welcome to Lagos Hotel, where we combine modern luxury with
                timeless elegance to provide you with an exceptional stay in
                Lagos. Our hotel is designed to offer you the utmost comfort and
                convenience, making it the ideal choice for travelers seeking a
                relaxing and memorable experience. Each of our spacious rooms
                and suites is tastefully decorated and equipped with the latest
                amenities to ensure your stay is as comfortable as possible.
                Enjoy stunning views, complimentary Wi-Fi, and premium bedding
                that promises a restful night&apos;s sleep.
                <br />
                <br />
                At Lagos Hotel, we pride ourselves on our exceptional service.
                Our dedicated team is always on hand to assist you with any
                request, ensuring that your stay is tailored to your needs. From
                arranging transportation to booking local tours, we are here to
                make your stay seamless and enjoyable.
              </p>
            </div>
          </div>
          <div className="hero_sec_bottom_side_2">
            <div className="date-range-picker">
              <div className="date_range_labels">
                <div className="date_range_label">Check-In Date</div>
                <div className="date_range_label">Check-Out Date</div>
              </div>
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
              <button
                onClick={handleHomepageBooking}
                className="book_hotel_btn general_btn_style"
              >
                <p>BOOK HOTEL</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionBottom
