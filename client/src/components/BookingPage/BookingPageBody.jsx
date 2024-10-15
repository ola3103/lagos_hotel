import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { addDays, format, isSameDay } from "date-fns"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GlobalHotelContext } from "../../context/HotelContext"

const BookingPageBody = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ])

  const navigate = useNavigate()

  const { hotelDateState, setHotelDateState } = GlobalHotelContext()

  const handleBookingRoomBtn = () => {
    const { startDate, endDate } = state[0]
    if (endDate > startDate) {
      setHotelDateState({
        checkInDate: format(startDate, "MMM d"),
        checkOutDate: format(endDate, "MMM d"),
      })
      console.log(hotelDateState)
      navigate("/rooms")
    } else {
      console.log("Check-out date must be later than check-in date.")
    }
  }

  const isSameDate = isSameDay(state[0].startDate, state[0].endDate)

  console.log(isSameDate)

  const renderDateRangePicker = (direction, months) => {
    return (
      <DateRangePicker
        className="booking_page_body_3_1_1"
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={months}
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 30)}
        ranges={state}
        scroll={{ enabled: true }}
        direction={direction}
      />
    )
  }

  return (
    <div className="booking_page_body">
      <div className="booking_page_body_container">
        <div className="booking_page_body_top">
          <h1 className="booking_page_body_1">BOOKING</h1>
          <p className="booking_page_body_2">
            Select the best days of your stay
          </p>
        </div>
        <div className="booking_page_body_3">
          <div className="booking_page_body_3_1">
            {renderDateRangePicker("horizontal", 2)}
          </div>
          <div className="booking_page_body_3_2">
            {renderDateRangePicker("vertical", 1)}
          </div>
          <button
            disabled={isSameDate ? true : false}
            onClick={handleBookingRoomBtn}
            className={
              isSameDate
                ? "booking_page_body_4"
                : "booking_page_body_4 booking_page_body_4_active"
            }
          >
            <p> LET'S GO!</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingPageBody
