const stripe = require("stripe")(
  "sk_test_51PwAUPKE1f9pkgLIXpUVPg2UJxUX0KlglXOZvdbkChsKojEInPnHwEirMTfAqIAliUQtKDiE6P5iEIWCyDItGPCd0095ULSE1i"
)
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
  const { hotelBookingInfo } = req.body
  console.log(hotelBookingInfo)

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: hotelBookingInfo.name,
            description: hotelBookingInfo.description,
            images: [hotelBookingInfo.images[0]],
          },
          unit_amount: hotelBookingInfo.price * 100,
        },
        quantity: hotelBookingInfo.numberOfNights,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/book-room",
  })

  console.log(session)

  res.status(200).json({ status: "success", url: session.url })
  // res.redirect(303, session.url)
}
