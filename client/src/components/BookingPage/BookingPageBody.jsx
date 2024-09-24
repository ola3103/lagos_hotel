import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { addDays, differenceInDays } from "date-fns"
import { useState } from "react"

const BookingPageBody = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ])

  return (
    <div className="booking_page_body">
      <div className="booking_page_body_container">
        <h1 className="booking_page_body_1">BOOKING</h1>
        <p className="booking_page_body_2">Select the best days of your stay</p>
        <div className="booking_page_body_3">
          <div className="booking_page_body_3_1">
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 60)}
              ranges={state}
              scroll={{ enabled: true }}
              direction="horizontal"
            />
          </div>
        </div>
        <button className="booking_page_body_4">
          <p> LET'S GO!</p>
        </button>
      </div>
    </div>
  )
}

export default BookingPageBody
