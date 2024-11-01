import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const BlockForwardNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.path) {
        navigate(event.state.path, { replace: true })
      } else {
        navigate("/", { replace: true })
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [navigate])

  useEffect(() => {
    const clearForwardHistory = () => {
      window.history.pushState(null, "", location.pathname)
      window.history.forward()
    }

    clearForwardHistory()
  }, [location.pathname])

  return null
}

export default BlockForwardNavigation
