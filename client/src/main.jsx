import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { HotelProvider } from "./context/HotelContext.jsx"
import BlockForwardNavigation from "./hooks/BlockForwardNavigation.jsx"
import { AccessProvider } from "./context/AccessContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <BlockForwardNavigation /> */}
      <HotelProvider>
        <AccessProvider>
          <App />
        </AccessProvider>
      </HotelProvider>
    </BrowserRouter>
  </React.StrictMode>
)
