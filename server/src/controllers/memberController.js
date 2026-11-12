
const mongoose = require("mongoose");
const Member = require("../models/Member");

// CREATE MEMBER
const createMember = async (req, res, next) => {
    try {
        const member = await Member.create(req.body);

        res.status(201).json({
            success: true,
            message: "Member created successfully",
            data: member
        });
    } catch (error) {
        next(error);
    }
};

// GET ALL MEMBERS
const getMembers = async (req, res, next) => {
    try {
        const members = await Member.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: members.length,
            data: members
        });
    } catch (error) {
        next(error);
    }
};

// GET SINGLE MEMBER
const getMemberById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid member ID"
            });
        }

        const member = await Member.findById(id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            data: member
        });
    } catch (error) {
        next(error);
    }
};

// UPDATE MEMBER
const updateMember = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid member ID"
            });
        }

        const updatedMember = await Member.findByIdAndUpdate(
            id,
            { $set: req.body },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedMember) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member updated successfully",
            data: updatedMember
        });
    } catch (error) {
        next(error);
    }
};

// DELETE MEMBER
const deleteMember = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid member ID"
            });
        }

        const deletedMember = await Member.findByIdAndDelete(id);

        if (!deletedMember) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member deleted successfully",
            data: deletedMember
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember
};
