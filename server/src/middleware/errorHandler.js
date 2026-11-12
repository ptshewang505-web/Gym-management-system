
const errorHandler = (err, req, res, next) => {
  console.error("API Error:", err.message);

  // Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  // Duplicate email
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  // Unexpected server error
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal Server Error"
        : err.message,
  });
};

module.exports = errorHandler;