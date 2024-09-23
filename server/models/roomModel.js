const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalUnits: {
      type: Number,
      required: true,
    },
    availableUnits: {
      type: Number,
    },
    images: {
      type: [String],
      default: [],
    },
    maxOccupancy: {
      type: Number,
      default: 2,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
