import { UseAccess } from "../context/AccessContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoomRoute = () => {
  const { hasChooseDate } = UseAccess()

  return hasChooseDate ? <Outlet /> : <Navigate to="/" />
}

const ProtectBookingFormInfoRoute = () => {
  const { hasBookedRoom } = UseAccess()

  return hasBookedRoom ? <Outlet /> : <Navigate to="/" />
}

export { ProtectedRoomRoute, ProtectBookingFormInfoRoute }
