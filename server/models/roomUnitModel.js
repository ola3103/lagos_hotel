const mongoose = require("mongoose")

const roomUnitSchema = mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    unitNumber: {
      type: String,
      required: true,
    },
    bookings: [
      {
        checkInDate: {
          type: Date,
          required: true,
        },
        checkOutDate: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

const RoomUnit = mongoose.model("RoomUnit", roomUnitSchema)

module.exports = RoomUnit
