const mongoose = require("mongoose")

const tokenSchema = mongoose.Schema(
  {
    sessionToken: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Token = mongoose.model("Token", tokenSchema)

module.exports = Token
