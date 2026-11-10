
import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import "./Members.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  plan: "",
  address: "",
};

function Members() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [members, setMembers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    const age = Number(formData.age);

    if (!formData.age || age < 16 || age > 100) {
      newErrors.age = "Age must be between 16 and 100.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender.";
    }

    if (!formData.plan) {
      newErrors.plan = "Please select a membership plan.";
    }

    if (formData.address.trim().length < 5) {
      newErrors.address = "Address must contain at least 5 characters.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    const newMember = {
      id: Date.now(),
      ...formData,
    };

    setMembers((prev) => [...prev, newMember]);

    console.log("Registered Member:", newMember);

    setSuccessMessage(
      `${formData.name} has been registered successfully!`
    );

    setFormData(initialForm);
    setErrors({});
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setSuccessMessage("");
  };

  // Delete member
  const handleDelete = (id) => {
    setMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );
  };

  return (
    <div className="members-page">
      <PageTitle
        title="Member Registration"
        description="Register and manage gym members."
      />

      <div className="member-form-card">
        <h2>Register New Member</h2>

        <p className="form-description">
          Enter the member details below to register a new gym member.
        </p>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="member-form-grid">

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <p className="error-message">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <p className="error-message">{errors.phone}</p>
              )}
            </div>

            {/* Age */}
            <div className="form-group">
              <label htmlFor="age">
                Age <span>*</span>
              </label>

              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter age"
                value={formData.age}
                onChange={handleChange}
              />

              {errors.age && (
                <p className="error-message">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">
                Gender <span>*</span>
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {errors.gender && (
                <p className="error-message">{errors.gender}</p>
              )}
            </div>

            {/* Membership Plan */}
            <div className="form-group">
              <label htmlFor="plan">
                Membership Plan <span>*</span>
              </label>

              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
              >
                <option value="">Select membership plan</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              {errors.plan && (
                <p className="error-message">{errors.plan}</p>
              )}
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="address">
                Address <span>*</span>
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="Enter member address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
              />

              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>
          </div>

          {/* Form Buttons */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Register Member
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>

      {/* Registered Members */}
      <div className="registered-members">
        <div className="registered-members-header">
          <h2>Registered Members</h2>

          <span className="member-count">
            {members.length} Members
          </span>
        </div>

        {members.length === 0 ? (
          <p className="empty-members">
            No members registered yet. Fill out the form above.
          </p>
        ) : (
          <div className="member-list">
            {members.map((member) => (
              <div className="member-item" key={member.id}>
                <div className="member-info">
                  <h3>{member.name}</h3>

                  <p>{member.email}</p>

                  <p>
                    {member.phone} | Age: {member.age}
                  </p>

                  <p>
                    {member.plan} Plan | {member.gender}
                  </p>

                  <p>{member.address}</p>
                </div>

                <button
                  type="button"
                  className="delete-member-btn"
                  onClick={() => handleDelete(member.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;
