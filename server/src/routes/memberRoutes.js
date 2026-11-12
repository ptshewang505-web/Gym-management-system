
const express = require("express");
const router = express.Router();

const {
    createMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember
} = require("../controllers/memberController");

// GET all members
router.get("/", getMembers);

// POST create member
router.post("/", createMember);

// GET member by ID
router.get("/:id", getMemberById);

// PUT update member
router.put("/:id", updateMember);

// DELETE member
router.delete("/:id", deleteMember);

module.exports = router;
