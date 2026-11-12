
const express = require("express");

const memberRoutes = require("./src/routes/memberRoutes");
const requestLogger = require("./src/middleware/requestLogger");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// ======================================
// MIDDLEWARE
// ======================================

// Parse JSON request bodies
app.use(express.json());

// Log incoming requests
app.use(requestLogger);

// ======================================
// API STATUS
// ======================================

app.get("/api/status", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GYMFLOW API is running",
    status: "success",
  });
});

// ======================================
// MEMBER CRUD ROUTES
// ======================================

app.use("/api/members", memberRoutes);

// ======================================
// 404 ROUTE
// ======================================

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ======================================
// GLOBAL ERROR HANDLER
// ======================================

app.use(errorHandler);

module.exports = app;
