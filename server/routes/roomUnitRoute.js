const express = require("express")
const router = express.Router()

const roomUnitController = require("../controllers/roomUnitController")

router.get("/", roomUnitController.getAllRoomUnit)

module.exports = router
