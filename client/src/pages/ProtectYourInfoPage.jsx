import { Outlet, Navigate } from "react-router-dom"

const ProtectYourInfoPage = ({ hasChoosenRoom }) => {
  return hasChoosenRoom ? <Outlet /> : <Navigate to="/" />
}

export default ProtectYourInfoPage
