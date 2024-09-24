import { createContext, useContext, useState } from "react"
import { format } from "date-fns"

const HotelContext = createContext(null)

const HotelProvider = ({ children }) => {
  const today = new Date()

  const [hotelDateState, setHotelDateState] = useState({
    checkInDate: format(today, "MMM d"),
    checkOutDate: format(today, "MMM d"),
  })

  const [tripCartState, setTripCartState] = useState({})

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
