
const express = require("express");

const app = express();

// Middleware for JSON requests
app.use(express.json());

// Middleware for URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GYMFLOW Backend is running successfully!",
  });
});

// Export application
module.exports = app;
