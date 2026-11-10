
const members = [
  {
    id: "101",
    name: "Pema Norbu",
    email: "pema@example.com",
    phone: "1234567890",
    plan: "Monthly",
  },
];

// Get all members
const getMembers = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Members retrieved successfully",
    data: members,
  });
};

// Get member by ID
const getMemberById = (req, res) => {
  const { id } = req.params;

  const member = members.find((item) => item.id === id);

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
};

// Create a member
const createMember = (req, res) => {
  const { name, email, phone, plan } = req.body;

  if (!name || !email || !phone || !plan) {
    return res.status(400).json({
      success: false,
      message: "All member fields are required",
    });
  }

  const newMember = {
    id: String(Date.now()),
    name,
    email,
    phone,
    plan,
  };

  members.push(newMember);

  res.status(201).json({
    success: true,
    message: "Member created successfully",
    data: newMember,
  });
};

// Update a member
const updateMember = (req, res) => {
  const { id } = req.params;

  const member = members.find((item) => item.id === id);

  if (!member) {
    return res.status(404).json({
      success: false,
      message: "Member not found",
    });
  }

  const { name, email, phone, plan } = req.body;

  if (!name || !email || !phone || !plan) {
    return res.status(400).json({
      success: false,
      message: "All member fields are required",
    });
  }

  member.name = name;
  member.email = email;
  member.phone = phone;
  member.plan = plan;

  res.status(200).json({
    success: true,
    message: "Member updated successfully",
    data: member,
  });
};

// Delete a member
const deleteMember = (req, res) => {
  const { id } = req.params;

  const index = members.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Member not found",
    });
  }

  members.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Member deleted successfully",
  });
};

module.exports = {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
