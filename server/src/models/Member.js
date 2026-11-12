
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
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
            min: [16, "Minimum age is 16"],
            max: [100, "Maximum age is 100"]
        },

        gender: {
            type: String,
            required: [true, "Gender is required"],
            enum: ["Male", "Female", "Other"]
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please enter a valid email"
            ]
        },

        phone: {
            type: String,
            required: [true, "Phone number is required"],
            match: [/^\d{10}$/, "Phone must contain 10 digits"]
        },

        address: {
            type: String,
            required: [true, "Address is required"],
            trim: true
        },

        plan: {
            type: String,
            required: [true, "Membership plan is required"],
            enum: ["Monthly", "Quarterly", "Yearly"]
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

module.exports = mongoose.model("Member", memberSchema);
