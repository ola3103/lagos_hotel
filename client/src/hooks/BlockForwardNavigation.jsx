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
    // Ensure there is no forward history
    const clearForwardHistory = () => {
      window.history.pushState(null, "", location.pathname)
      window.history.forward() // Attempt to move forward (which will do nothing) and clear forward entries
    }

    clearForwardHistory()
  }, [location.pathname])

  return null
}

export default BlockForwardNavigation
