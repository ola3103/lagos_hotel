import BookingInfoPageBody_1 from "./BookingInfoPageBody_1"
import BookingInfoPageBody_2 from "./BookingInfoPageBody_2"

const BookingInfoPageBody = () => {
  return (
    <section className="booking_info_page_body">
      <div className="booking_info_page_body_container">
        <div className="booking_info_page_body_1">
          <BookingInfoPageBody_1 />
        </div>
        <div className="booking_info_page_body_2">
          <BookingInfoPageBody_2 />
        </div>
      </div>
    </section>
  )
}

export default BookingInfoPageBody
