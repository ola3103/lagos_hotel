const Room = require("../models/roomModel")
const RoomUnit = require("../models/roomUnitModel")
const { CustomError } = require("./errorController")

exports.createRoom = async (req, res) => {
  const { name, price, totalUnits, images, maxOccupancy, description, beds } =
    req.body
  const newRoom = await Room.create({
    name,
    price,
    totalUnits,
    images,
    maxOccupancy,
    description,
    beds,
  })

  const roomUnits = []
  for (let i = 1; i <= totalUnits; i++) {
    roomUnits.push({
      room: newRoom._id,
      unitNumber: `${newRoom.name}-${i}`,
      bookings: [],
    })
  }

  await RoomUnit.insertMany(roomUnits)

  res.status(200).json({
    status: "success",
    message: "Room and room units created successfully",
    data: newRoom,
  })
}

exports.getAllRoom = async (req, res) => {
  const room = await Room.find({})
  res
    .status(200)
    .json({ status: "success", totalRoom: room.length, data: room })
}

exports.getSingleRoom = async (req, res) => {
  const { id } = req.params

  const room = await Room.findOne({ _id: id })

  if (!room) {
    throw new CustomError(`There is no room with id: ${id}`, 404)
  }

  res.status(200).json({ status: "success", room })
}

exports.updateRoom = async (req, res) => {
  const { id } = req.params

  const room = await Room.findOne({ _id: id })
  res.status(200).json({ status: "success", room })
}
