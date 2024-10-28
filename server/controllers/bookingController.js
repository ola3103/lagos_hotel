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
    metadata: {
      roomId: hotelBookingInfo._id,
      checkInDate: hotelBookingInfo.checkInDate,
      checkOutDate: hotelBookingInfo.checkOutDate,
      firstName: hotelBookingInfo.firstName,
      lastName: hotelBookingInfo.lastName,
      email: hotelBookingInfo.emailAddress,
      phoneNumber: hotelBookingInfo.phoneNumber,
      specialRequest: hotelBookingInfo.specialRequest,
      numberOfNights: hotelBookingInfo.numberOfNights,
    },
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "https://lagoshotel.vercel.app/payment-successful",
    cancel_url: "https://lagoshotel.vercel.app",
  })

  res.status(200).json({ status: "success", url: session.url })
}

const createBooking = async (bookingInfo) => {
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
  } = bookingInfo

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

  await sendEmail({
    to: email,
    html: `<p>Hello ${firstName}</p>
          <p>Your booking confirmation code is ${newBooking._id}. Please present this code to the receptionist upon arrival at the hotel to confirm your booking.</p>
          <br/>
          <p>Thank you for choosing lagos hotel</p>`,
    subject: "Booking Code",
  })

  await availableUnit.save()
}

exports.webhookSession = async (req, res) => {
  const signature = req.headers["stripe-signature"]

  let event

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    res.status(400).send(`Webhook Error: ${error.message}`)
  }

  if (event.type === "checkout.session.completed") {
    const checkoutSessionCompleted = event.data.object

    try {
      await createBooking(checkoutSessionCompleted.metadata)
      console.log("Booking created successfully.")
    } catch (error) {
      console.error("Error in createBooking:", error.message)
      return res
        .status(500)
        .json({ error: "Booking creation failed", msg: error })
    }
  }

  res.status(200).json({ received: true })
}
