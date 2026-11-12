const express = require("express");
const cors = require("cors");

const memberRoutes = require("./src/routes/memberRoutes");
const requestLogger = require("./src/middleware/requestLogger");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// CORS configuration
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use(requestLogger);

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "GYMFLOW API is running"
    });
});

// Member API
app.use("/api/members", memberRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Error handler
app.use(errorHandler);

module.exports = app;