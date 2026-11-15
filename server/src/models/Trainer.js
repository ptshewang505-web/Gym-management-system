const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: 3
        },

        age: {
            type: Number,
            required: [true, "Age is required"],
            min: 18,
            max: 100
        },

        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"]
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },

        phone: {
            type: String,
            required: [true, "Phone number is required"],
            match: /^\d{10}$/
        },

        specialization: {
            type: String,
            required: [true, "Specialization is required"],
            trim: true
        },

        experience: {
            type: Number,
            required: [true, "Experience is required"],
            min: 0
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active"
        },

        joinDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Trainer", trainerSchema);