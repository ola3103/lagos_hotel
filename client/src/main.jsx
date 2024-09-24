import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { HotelProvider } from "./context/HotelContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelProvider>
        <App />
      </HotelProvider>
    </BrowserRouter>
  </React.StrictMode>
)
