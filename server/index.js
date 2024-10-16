require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

const roomRoute = require("./routes/roomRoute")
const bookingRoute = require("./routes/bookingRoute")
const roomUnitRoute = require("./routes/roomUnitRoute")
const { errorController } = require("./controllers/errorController")

app.use(express.json())

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
)

app.options("*", cors())

app.use("/api/v1/room", roomRoute)
app.use("/api/v1/booking", bookingRoute)
app.use("/api/v1/roomUnit", roomUnitRoute)
app.use(errorController)
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ status: "fail", msg: "This route cannot be found on this server" })
})

const startApp = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    app.listen(5070, () => console.log("Server is listening on port 5070"))
  } catch (error) {
    console.log(error)
  }
}

startApp()
