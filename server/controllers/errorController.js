class CustomError extends Error {
  constructor(message, statusCode) {
    super(message)
    statusCode = this.statusCode
  }
}

const errorController = (err, req, res, next) => {
  const errorObject = {
    msg: err.message || "something went wrong please try again later",
    statusCode: err.statusCode || 500,
  }

  if (err.name === "CastError") {
    errorObject.msg = `There is no room with id: ${err.value}`
    errorObject.statusCode = 404
  }

  if (err.name === "ValidationError") {
    const errString = Object.values(err.errors).map((el) => el.message)
    errorObject.message = `Invalid Input:  ${errString.join(". ")}`
    errorObject.statusCode = 400
  }

  res
    .status(errorObject.statusCode)
    .json({
      status: "fail",
      message: errorObject.msg,
      error: err,
      errorStack: err.stack,
    })
}

module.exports = { errorController, CustomError }
