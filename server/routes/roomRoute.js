const express = require("express")
const router = express.Router()

const roomController = require("../controllers/roomController")

router.post("/", roomController.createRoom)
router.get("/", roomController.getAllRoom)
router.get("/:id", roomController.getSingleRoom)

module.exports = router
