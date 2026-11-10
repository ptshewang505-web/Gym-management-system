
const express = require("express");

const memberRoutes = require("./src/routes/memberRoutes");
const requestLogger = require("./src/middleware/requestLogger");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// Parse incoming JSON
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use(requestLogger);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to GYMFLOW Gym Management System API",
    status: "Running",
  });
});

// API status route
app.get("/api/status", (req, res) => {
  res.status(200).json({
    message: "GYMFLOW API is running",
    status: "success",
  });
});

// Member routes from Sprint 12
app.use("/api/members", memberRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
