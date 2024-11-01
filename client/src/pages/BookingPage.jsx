import BookingPageBanner from "../components/BookingPage/BookingPageBanner"
import BookingPageBody from "../components/BookingPage/BookingPageBody"
import BookingPageFooter from "../components/BookingPage/BookingPageFooter"

const BookingPage = ({ setHasChoosenDate }) => {
  return (
    <section className="booking_page">
      <BookingPageBanner />
      <BookingPageBody setHasChoosenDate={setHasChoosenDate} />
      <BookingPageFooter />
    </section>
  )
}

export default BookingPage
