import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { HotelProvider } from "./context/HotelContext.jsx"
import BlockForwardNavigation from "./hooks/BlockForwardNavigation.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlockForwardNavigation />
      <HotelProvider>
        <App />
      </HotelProvider>
    </BrowserRouter>
  </React.StrictMode>
)
