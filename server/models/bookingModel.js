const mongoose = require("mongoose")
const validator = require("validator")

const bookingSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isEmail(v)
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    phoneNumber: {
      type: Number,
      required: true,
      maxLength: 11,
    },
    specialRequest: {
      type: String,
      trim: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: "Room",
      required: true,
    },
    numberOfNights: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const Room = mongoose.model("Booking", bookingSchema)
module.exports = Room
