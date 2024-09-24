import BookingPageBanner from "../components/BookingPage/BookingPageBanner"
import BookingPageBody from "../components/BookingPage/BookingPageBody"
import BookingPageFooter from "../components/BookingPage/BookingPageFooter"

const BookingPage = () => {
  return (
    <section className="booking_page">
      <BookingPageBanner />
      <BookingPageBody />
      <BookingPageFooter />
    </section>
  )
}

export default BookingPage
