const Token = require("../models/tokenModel")
const { CustomError } = require("./errorController")

exports.verifyToken = async (req, res) => {
  const { token } = req.body

  const tokenValid = await Token.findOne({ sessionToken: token })

  if (!tokenValid) {
    throw CustomError("Token Validation failed", 400)
  }

  res
    .status(200)
    .json({ status: "success", message: "token verification successful" })
}
