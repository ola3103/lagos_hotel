class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    statusCode = this.statusCode;
  }
}

const errorController = (err, req, res, next) => {
  const errorObject = {
    msg: err.message || "something went wrong please try again later",
    statusCode: err.statusCode || 500,
  };

  if (err.name === "CastError") {
    errorObject.msg = `There is no room with id: ${err.value}`;
    errorObject.statusCode = 404;
  }
  res
    .status(errorObject.statusCode)
    .json({ status: "fail", message: errorObject.msg, error: err });
};

module.exports = { errorController, CustomError };
