import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LagosBar from "./pages/LagosBar"
import Rooms from "./pages/Rooms"
import RoomDetails from "./pages/RoomDetails"
import ScrollToTop from "./hooks/ScrollToTop"
import BookingPage from "./pages/BookingPage"
import BookingInfoPage from "./pages/BookingInfoPage"
import PaymentSuccessPage from "./pages/PaymentSuccessPage"

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-room" element={<BookingPage />} />
          <Route path="/the-lagos-bar" element={<LagosBar />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room-details/:roomId" element={<RoomDetails />} />
          <Route path="/your-info" element={<BookingInfoPage />} />
          <Route path="/payment-successful" element={<PaymentSuccessPage />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
