import { createContext, useContext, useState } from "react"

const AccessContext = createContext()

const AccessProvider = ({ children }) => {
  const [hasBookedRoom, setHasBookedRoom] = useState(false)
  const [hasChooseDate, setHasChooseDate] = useState(false)

  return (
    <AccessContext.Provider
      value={{
        hasBookedRoom,
        setHasBookedRoom,
        hasChooseDate,
        setHasChooseDate,
      }}
    >
      {children}
    </AccessContext.Provider>
  )
}

export const UseAccess = () => useContext(AccessContext)

export { AccessProvider }
