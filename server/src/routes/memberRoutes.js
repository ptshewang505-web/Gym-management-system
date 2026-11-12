
const express = require("express");

const router = express.Router();

const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
} = require("../controllers/memberController");

// CREATE MEMBER
router.post("/", createMember);

// GET ALL MEMBERS
router.get("/", getAllMembers);

// GET MEMBER BY ID
router.get("/:id", getMemberById);

// UPDATE MEMBER
router.put("/:id", updateMember);

// DELETE MEMBER
router.delete("/:id", deleteMember);

module.exports = router;
