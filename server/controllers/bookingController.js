const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const Booking = require("../models/bookingModel")
const RoomUnit = require("../models/roomUnitModel")

const sendEmail = require("../utils/sendEmail")
const { CustomError } = require("./errorController")

exports.createBooking = async (req, res) => {
  const {
    roomId,
    checkInDate,
    checkOutDate,
    firstName,
    lastName,
    email,
    phoneNumber,
    specialRequest,
    numberOfNights,
  } = req.body

  const availableUnit = await RoomUnit.findOne({
    room: roomId,
    bookings: {
      $not: {
        $elemMatch: {
          $or: [
            {
              checkInDate: { $lt: new Date(checkOutDate) },
              checkOutDate: { $gt: new Date(checkInDate) },
            },
          ],
        },
      },
    },
  })

  if (!availableUnit) {
    throw new CustomError(
      "No available units for the selected room and dates",
      400
    )
  }

  const newBooking = await Booking.create({
    room: roomId,
    checkInDate,
    checkOutDate,
    firstName,
    lastName,
    email,
    phoneNumber,
    specialRequest,
    numberOfNights,
    paid: true,
  })

  availableUnit.bookings.push({
    checkInDate: new Date(checkInDate),
    checkOutDate: new Date(checkOutDate),
  })

  await availableUnit.save()

  res.status(201).json({
    status: "success",
    data: newBooking,
  })
}

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find({})

  res.status(200).json({ status: "success", data: bookings })
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

exports.webhookSession = async (req, res) => {
  const event = req.body

  console.log(event)
  res.send("test")
}
