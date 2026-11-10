
// server/src/app.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Gym Management System API",
    status: "Running",
  });
});

module.exports = app;
