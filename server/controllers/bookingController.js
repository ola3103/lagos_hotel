const Booking = require("../models/bookingModel")

exports.createBooking = async (req, res) => {
  const booking = await Booking.create({ ...req.body })
  const populatedBooking = await Booking.findOne({ _id: booking._id }).populate(
    "room"
  )
  res.status(200).json({
    status: "success",
    message: "booking created",
    data: populatedBooking,
  })
}

exports.getCheckoutSession = async (req, res) => {
  res.send("Get checkout session")
}
