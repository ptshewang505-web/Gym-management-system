
import { useEffect, useState } from "react";
import PageTitle from "../../components/ui/PageTitle";

import {
    getMembers,
    createMember,
    updateMember,
    deleteMember
} from "../../services/memberService";

import "./Members.css";

const initialForm = {
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    plan: "Monthly",
    status: "Active"
};

function Members() {
    const [formData, setFormData] = useState(initialForm);
    const [members, setMembers] = useState([]);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");
    const [apiError, setApiError] = useState("");

    const [editingId, setEditingId] = useState(null);

    // FETCH MEMBERS
    const fetchMembers = async () => {
        try {
            setLoading(true);
            setApiError("");

            const response = await getMembers();
            setMembers(response.data || []);

        } catch (error) {
            setApiError(error.message || "Unable to load members.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    // FORM VALIDATION
    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim().length < 3) {
            newErrors.name = "Name must contain at least 3 characters.";
        }

        if (
            !formData.age ||
            Number(formData.age) < 16 ||
            Number(formData.age) > 100
        ) {
            newErrors.age = "Age must be between 16 and 100.";
        }

        if (!formData.gender) {
            newErrors.gender = "Please select gender.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain 10 digits.";
        }

        if (formData.address.trim().length < 5) {
            newErrors.address = "Please enter a complete address.";
        }

        if (!formData.plan) {
            newErrors.plan = "Please select a membership plan.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // HANDLE INPUT CHANGE
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: ""
        }));
    };

    // CREATE OR UPDATE MEMBER
    const handleSubmit = async (event) => {
        event.preventDefault();

        setSuccessMessage("");
        setApiError("");

        if (!validateForm()) return;

        try {
            setSaving(true);

            const memberData = {
                name: formData.name.trim(),
                age: Number(formData.age),
                gender: formData.gender,
                email: formData.email.trim().toLowerCase(),
                phone: formData.phone.trim(),
                address: formData.address.trim(),
                plan: formData.plan,
                status: formData.status
            };

            if (editingId) {
                await updateMember(editingId, memberData);
                setSuccessMessage("Member updated successfully!");
            } else {
                await createMember(memberData);
                setSuccessMessage("Member registered successfully!");
            }

            setFormData(initialForm);
            setEditingId(null);
            setErrors({});

            await fetchMembers();

        } catch (error) {
            setApiError(error.message || "Unable to save member.");
        } finally {
            setSaving(false);
        }
    };

    // EDIT MEMBER
    const handleEdit = (member) => {
        setFormData({
            name: member.name || "",
            age: member.age ?? "",
            gender: member.gender || "",
            email: member.email || "",
            phone: member.phone || "",
            address: member.address || "",
            plan: member.plan || "Monthly",
            status: member.status || "Active"
        });

        setEditingId(member._id);

        setErrors({});
        setSuccessMessage("");
        setApiError("");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // CANCEL EDIT
    const handleCancelEdit = () => {
        setFormData(initialForm);
        setEditingId(null);
        setErrors({});
        setSuccessMessage("");
        setApiError("");
    };

    // DELETE MEMBER
    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this member?"
        );

        if (!confirmed) return;

        try {
            setApiError("");
            setSuccessMessage("");

            await deleteMember(id);

            if (editingId === id) {
                handleCancelEdit();
            }

            setSuccessMessage("Member deleted successfully!");

            await fetchMembers();

        } catch (error) {
            setApiError(error.message || "Unable to delete member.");
        }
    };

    return (
        <div className="members-page">

            <PageTitle
                title="Members"
                subtitle="Manage your gym members"
            />

            {/* MEMBER FORM */}
            <div className="member-form-card">

                <h2>
                    {editingId ? "Edit Member" : "Register New Member"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="member-form-grid">

                        {/* FULL NAME */}
                        <div className="form-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter full name"
                            />

                            {errors.name && (
                                <p className="error-message">{errors.name}</p>
                            )}
                        </div>

                        {/* AGE */}
                        <div className="form-group">
                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age"
                                min="16"
                                max="100"
                            />

                            {errors.age && (
                                <p className="error-message">{errors.age}</p>
                            )}
                        </div>

                        {/* GENDER */}
                        <div className="form-group">
                            <label>Gender</label>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            {errors.gender && (
                                <p className="error-message">{errors.gender}</p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                            />

                            {errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div className="form-group">
                            <label>Phone Number</label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="10-digit phone number"
                                maxLength="10"
                            />

                            {errors.phone && (
                                <p className="error-message">{errors.phone}</p>
                            )}
                        </div>

                        {/* MEMBERSHIP PLAN */}
                        <div className="form-group">
                            <label>Membership Plan</label>

                            <select
                                name="plan"
                                value={formData.plan}
                                onChange={handleChange}
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Quarterly">Quarterly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        {/* STATUS */}
                        <div className="form-group">
                            <label>Membership Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        {/* ADDRESS */}
                        <div className="form-group full-width">
                            <label>Address</label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter complete address"
                                rows="3"
                            />

                            {errors.address && (
                                <p className="error-message">{errors.address}</p>
                            )}
                        </div>

                    </div>

                    {/* FORM BUTTONS */}
                    <div className="form-actions">

                        
<button
    type="submit"
    className="submit-btn"
    disabled={saving}
>
    {saving
        ? "Please wait..."
        : editingId
            ? "Update Member"
            : "Register Member"}
</button>


                        {editingId && (
                            <button
                                type="button"
                                className="cancel-edit-btn"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </form>

                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}

                {apiError && (
                    <p className="error-message">{apiError}</p>
                )}

            </div>

            {/* REGISTERED MEMBERS */}
            <div className="registered-members">

                <h2>Registered Members</h2>

                {loading ? (
                    <p>Loading members...</p>
                ) : members.length === 0 ? (
                    <p>No members registered yet.</p>
                ) : (

                    <div className="member-list">

                        {members.map((member) => (

                            <div className="member-item" key={member._id}>

                                <div className="member-info">

                                    <h3>{member.name}</h3>

                                    <p><strong>Age:</strong> {member.age ?? "Not provided"}</p>

                                    <p><strong>Gender:</strong> {member.gender || "Not provided"}</p>

                                    <p><strong>Email:</strong> {member.email}</p>

                                    <p><strong>Phone:</strong> {member.phone}</p>

                                    <p><strong>Address:</strong> {member.address || "Not provided"}</p>

                                    <p><strong>Plan:</strong> {member.plan}</p>

                                    <p><strong>Status:</strong> {member.status || "Active"}</p>

                                    <p>
                                        <strong>Join Date:</strong>{" "}
                                        {member.joinDate
                                            ? new Date(member.joinDate).toLocaleDateString()
                                            : "Not available"}
                                    </p>

                                </div>

                                <div className="member-actions">

                                    <button
                                        type="button"
                                        className="edit-member-btn"
                                        onClick={() => handleEdit(member)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="delete-member-btn"
                                        onClick={() => handleDelete(member._id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default Members;
