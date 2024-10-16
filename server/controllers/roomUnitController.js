const RoomUnit = require("../models/roomUnitModel")

exports.getAllRoomUnit = async (req, res) => {
  const roomUnits = await RoomUnit.find({})
  res.status(200).json({ status: "success", data: roomUnits })
}
