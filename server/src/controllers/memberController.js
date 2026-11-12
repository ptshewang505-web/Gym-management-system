
const mongoose = require("mongoose");
const Member = require("../models/Member");

// ======================================
// CREATE MEMBER
// POST /api/members
// ======================================

const createMember = async (req, res, next) => {
  try {
    console.log("Received member data:", req.body);

    const member = await Member.create(req.body);

    console.log("Member saved successfully:", member._id);

    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: member,
    });
  } catch (error) {
    console.error("Create member error:", error.message);
    next(error);
  }
};

// ======================================
// GET ALL MEMBERS
// GET /api/members
// ======================================

const getAllMembers = async (req, res, next) => {
  try {
    const members = await Member.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (error) {
    console.error("Get all members error:", error.message);
    next(error);
  }
};

// ======================================
// GET MEMBER BY ID
// GET /api/members/:id
// ======================================

const getMemberById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    const member = await Member.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    console.error("Get member by ID error:", error.message);
    next(error);
  }
};

// ======================================
// UPDATE MEMBER
// PUT /api/members/:id
// ======================================

const updateMember = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    const member = await Member.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    console.log("Member updated successfully:", member._id);

    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: member,
    });
  } catch (error) {
    console.error("Update member error:", error.message);
    next(error);
  }
};

// ======================================
// DELETE MEMBER
// DELETE /api/members/:id
// ======================================

const deleteMember = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member ID",
      });
    }

    const member = await Member.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    console.log("Member deleted successfully:", member._id);

    res.status(200).json({
      success: true,
      message: "Member deleted successfully",
      data: member,
    });
  } catch (error) {
    console.error("Delete member error:", error.message);
    next(error);
  }
};

// ======================================
// EXPORT CONTROLLER FUNCTIONS
// ======================================

module.exports = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
