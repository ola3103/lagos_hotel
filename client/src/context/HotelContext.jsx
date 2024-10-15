import { createContext, useContext, useState, useEffect } from "react"
import { format } from "date-fns"

const HotelContext = createContext(null)

const HotelProvider = ({ children }) => {
  const today = new Date()

  const getInitialDates = () => {
    const storedDates = localStorage.getItem("hotelDateState")
    return storedDates
      ? JSON.parse(storedDates)
      : {
          checkInDate: format(today, "MMM d"),
          checkOutDate: format(today, "MMM d"),
        }
  }

  const [hotelDateState, setHotelDateState] = useState(getInitialDates)

  useEffect(() => {
    localStorage.setItem("hotelDateState", JSON.stringify(hotelDateState))
  }, [hotelDateState])

  const getInitialCartState = () => {
    const storedCart = localStorage.getItem("hotelCart")

    return storedCart ? JSON.parse(storedCart) : null
  }

  const [tripCartState, setTripCartState] = useState(getInitialCartState)

  useEffect(() => {
    localStorage.setItem("hotelCart", JSON.stringify(tripCartState))
  }, [tripCartState])

  return (
    <HotelContext.Provider
      value={{
        hotelDateState,
        setHotelDateState,
        tripCartState,
        setTripCartState,
      }}
    >
      {children}
    </HotelContext.Provider>
  )
}

export const GlobalHotelContext = () => {
  return useContext(HotelContext)
}

export { HotelProvider }
