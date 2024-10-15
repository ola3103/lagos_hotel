const express = require("express")
const router = express.Router()

const roomController = require("../controllers/roomController")

router.post("/", roomController.createRoom)
router.get("/", roomController.getAllRoom)
router.get("/:id", roomController.getSingleRoom)
router.patch("/:id", roomController.updateRoom)

module.exports = router
