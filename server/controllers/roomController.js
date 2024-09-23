const Room = require("../models/roomModel");
const { CustomError } = require("./errorController");

exports.createRoom = async (req, res) => {
  const room = await Room.create({ ...req.body });
  res.status(200).json({ status: "success", data: room });
};

exports.getAllRoom = async (req, res) => {
  const room = await Room.find({});
  res
    .status(200)
    .json({ status: "success", totalRoom: room.length, data: room });
};

exports.getSingleRoom = async (req, res) => {
  const { id } = req.params;

  const room = await Room.findOne({ _id: id });

  if (!room) {
    throw new CustomError(`There is no room with id: ${id}`, 404);
  }

  res.status(200).json({ status: "success", room });
};
