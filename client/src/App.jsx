import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LagosBar from "./pages/LagosBar"
import Rooms from "./pages/Rooms"
import RoomDetails from "./pages/RoomDetails"
import ScrollToTop from "./hooks/ScrollToTop"
import BookingPage from "./pages/BookingPage"
import BookingInfoPage from "./pages/BookingInfoPage"
import PaymentSuccessPage from "./pages/PaymentSuccessPage"
import { useState } from "react"
import ProtectRoomViewRoute from "./pages/ProtectRoomViewRoute"
import ProtectYourInfoPage from "./pages/ProtectYourInfoPage"
import Loader from "./pages/Loader"
import PageNotFound from "./pages/PageNotFound"

function App() {
  const [hasChoosenDate, setHasChoosenDate] = useState(false)
  const [hasChoosenRoom, setHasChoosenRoom] = useState(false)

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={<HomePage setHasChoosenDate={setHasChoosenDate} />}
          />
          <Route
            path="/book-room"
            element={<BookingPage setHasChoosenDate={setHasChoosenDate} />}
          />
          <Route path="/the-lagos-bar" element={<LagosBar />} />
          <Route
            element={<ProtectRoomViewRoute hasChoosenDate={hasChoosenDate} />}
          >
            <Route
              path="/rooms"
              element={<Rooms setHasChoosenRoom={setHasChoosenRoom} />}
            />
          </Route>
          <Route
            path="/room-details/:roomId"
            element={<RoomDetails setHasChoosenRoom={setHasChoosenRoom} />}
          />
          <Route
            element={<ProtectYourInfoPage hasChoosenRoom={hasChoosenRoom} />}
          >
            <Route path="/your-info" element={<BookingInfoPage />} />
          </Route>
          <Route path="/payment-successful" element={<PaymentSuccessPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
