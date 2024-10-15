const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Booking = require("../models/bookingModel")

const sendEmail = require("../utils/sendEmail")

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
    success_url: "http://localhost:5173/payment-successful",
    cancel_url: "http://localhost:5173",
  })

  sendEmail({
    to: hotelBookingInfo.emailAddress,
    html: `<p>Testing sending email</p>`,
    subject: "Test email",
  })

  console.log(session)

  res.status(200).json({ status: "success", url: session.url })
  // res.redirect(303, session.url)
}
