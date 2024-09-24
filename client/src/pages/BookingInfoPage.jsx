import BookingInfoPageBanner from "../components/BookingInfoPage/BookingInfoPageBanner"
import BookingInfoPageBody from "../components/BookingInfoPage/BookingInfoPageBody"
import BookingInfoPageFooter from "../components/BookingInfoPage/BookingInfoPageFooter"

const BookingInfoPage = () => {
  return (
    <section className="booking_info_page">
      <BookingInfoPageBanner />
      <BookingInfoPageBody />
      <BookingInfoPageFooter />
    </section>
  )
}

export default BookingInfoPage
