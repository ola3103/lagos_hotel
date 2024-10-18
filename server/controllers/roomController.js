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
  const { checkInDate, checkOutDate } = req.query

  const checkIn = new Date(checkInDate)
  const checkOut = new Date(checkOutDate)

  const bookedUnits = await RoomUnit.find({
    bookings: {
      $elemMatch: {
        checkInDate: { $lt: checkOut },
        checkOutDate: { $gt: checkIn },
      },
    },
  })

  const bookedRoomCount = bookedUnits.reduce((acc, unit) => {
    acc[unit.room] = (acc[unit.room] || 0) + 1
    return acc
  }, {})

  const rooms = await Room.find({})

  const availableRooms = rooms.map((room) => {
    const bookedUnitsForRoom = bookedRoomCount[room._id] || 0
    return {
      ...room.toObject(),
      availableUnits: room.totalUnits - bookedUnitsForRoom,
    }
  })

  res.status(200).json({
    status: "success",
    totalRoom: availableRooms.length,
    data: availableRooms,
  })
}

exports.getSingleRoom = async (req, res) => {
  const { id } = req.params

  const room = await Room.findOne({ _id: id })

  if (!room) {
    throw new CustomError(`There is no room with id: ${id}`, 404)
  }

  res.status(200).json({ status: "success", room })
}
