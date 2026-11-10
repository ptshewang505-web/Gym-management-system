
const express = require("express");

const app = express();

const memberRoutes = require("./src/routes/memberRoutes");
const requestLogger = require("./src/middleware/requestLogger");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use(requestLogger);

// Member API routes
app.use("/api/members", memberRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GYMFLOW Backend is running successfully!",
  });
});

// Export application
module.exports = app;
