import { Outlet, Navigate } from "react-router-dom"

const ProtectRoomViewRoute = ({ hasChoosenDate }) => {
  return hasChoosenDate ? <Outlet /> : <Navigate to="/" />
}

export default ProtectRoomViewRoute
