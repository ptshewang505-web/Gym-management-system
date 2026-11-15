
import React, { useEffect, useState } from "react";

import {
    getTrainers,
    createTrainer,
    updateTrainer,
    deleteTrainer
} from "../../services/trainerService";

import "./Trainers.css";

const initialForm = {
    name: "",
    age: "",
    gender: "Male",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    status: "Active"
};

function Trainers() {
    const [trainers, setTrainers] = useState([]);
    const [formData, setFormData] = useState(initialForm);
    const [editingId, setEditingId] = useState(null);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // =====================================
    // FETCH ALL TRAINERS
    // =====================================

    const fetchTrainers = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await getTrainers();

            const trainerList = Array.isArray(response.data)
                ? response.data
                : [];

            setTrainers(trainerList);

        } catch (err) {
            setError(err.message || "Failed to load trainers.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    // =====================================
    // HANDLE INPUT CHANGES
    // =====================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setError("");
        setSuccessMessage("");
    };

    // =====================================
    // RESET FORM
    // =====================================

    const resetForm = () => {
        setFormData(initialForm);
        setEditingId(null);
    };

    const handleCancel = () => {
        resetForm();
        setError("");
        setSuccessMessage("");
    };

    // =====================================
    // FORM VALIDATION
    // =====================================

    const validateForm = () => {
        if (
            !formData.name.trim() ||
            !formData.age ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.specialization.trim() ||
            formData.experience === ""
        ) {
            return "Please fill in all required fields.";
        }

        if (formData.name.trim().length < 3) {
            return "Name must contain at least 3 characters.";
        }

        if (
            Number(formData.age) < 18 ||
            Number(formData.age) > 100
        ) {
            return "Age must be between 18 and 100.";
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email.trim()
            )
        ) {
            return "Please enter a valid email address.";
        }

        if (!/^\d{10}$/.test(formData.phone.trim())) {
            return "Phone number must contain exactly 10 digits.";
        }

        if (
            formData.experience === "" ||
            Number(formData.experience) < 0
        ) {
            return "Experience cannot be negative.";
        }

        return "";
    };

    // =====================================
    // ADD OR UPDATE TRAINER
    // =====================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            setSuccessMessage("");
            return;
        }

        try {
            setSaving(true);
            setError("");
            setSuccessMessage("");

            const trainerData = {
                name: formData.name.trim(),
                age: Number(formData.age),
                gender: formData.gender,
                email: formData.email.trim().toLowerCase(),
                phone: formData.phone.trim(),
                specialization: formData.specialization.trim(),
                experience: Number(formData.experience),
                status: formData.status
            };

            if (editingId) {
                // UPDATE TRAINER
                await updateTrainer(editingId, trainerData);

                setSuccessMessage(
                    "Trainer updated successfully!"
                );

            } else {
                // ADD TRAINER
                await createTrainer(trainerData);

                setSuccessMessage(
                    "Trainer added successfully!"
                );
            }

            resetForm();
            await fetchTrainers();

        } catch (err) {
            setError(
                err.message || "Failed to save trainer."
            );
        } finally {
            setSaving(false);
        }
    };

    // =====================================
    // EDIT TRAINER
    // =====================================

    const handleEdit = (trainer) => {
        setFormData({
            name: trainer.name || "",
            age: trainer.age ?? "",
            gender: trainer.gender || "Male",
            email: trainer.email || "",
            phone: trainer.phone || "",
            specialization: trainer.specialization || "",
            experience: trainer.experience ?? "",
            status: trainer.status || "Active"
        });

        setEditingId(trainer._id);

        setError("");
        setSuccessMessage("");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // =====================================
    // DELETE TRAINER
    // =====================================

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this trainer?"
        );

        if (!confirmed) return;

        try {
            setError("");
            setSuccessMessage("");

            await deleteTrainer(id);

            if (editingId === id) {
                resetForm();
            }

            await fetchTrainers();

            setSuccessMessage(
                "Trainer deleted successfully!"
            );

        } catch (err) {
            setError(
                err.message || "Failed to delete trainer."
            );
        }
    };

    // =====================================
    // JSX
    // =====================================

    return (
        <div className="trainers-page">

            {/* PAGE HEADER */}

            <div className="trainers-header">
                <div>
                    <h1>Trainer Management</h1>
                    <p>
                        Manage your gym trainers and their details.
                    </p>
                </div>

                <div className="trainer-count">
                    Total Trainers: {trainers.length}
                </div>
            </div>

            {/* SUCCESS MESSAGE */}

            {successMessage && (
                <div className="success-message">
                    ✓ {successMessage}
                </div>
            )}

            {/* ERROR MESSAGE */}

            {error && (
                <div className="error-message">
                    ✕ {error}
                </div>
            )}

            {/* TRAINER FORM */}

            <div className="trainer-form-card">

                <h2>
                    {editingId
                        ? "Update Trainer"
                        : "Add New Trainer"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="trainer-form-grid">

                        {/* NAME */}

                        <div className="form-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter trainer name"
                                required
                            />
                        </div>

                        {/* AGE */}

                        <div className="form-group">
                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                min="18"
                                max="100"
                                placeholder="Enter age"
                                required
                            />
                        </div>

                        {/* GENDER */}

                        <div className="form-group">
                            <label>Gender</label>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* EMAIL */}

                        <div className="form-group">
                            <label>Email</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        {/* PHONE */}

                        <div className="form-group">
                            <label>Phone</label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="10-digit phone number"
                                maxLength="10"
                                required
                            />
                        </div>

                        {/* SPECIALIZATION */}

                        <div className="form-group">
                            <label>Specialization</label>

                            <input
                                type="text"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                placeholder="e.g. Weight Training"
                                required
                            />
                        </div>

                        {/* EXPERIENCE */}

                        <div className="form-group">
                            <label>Experience (Years)</label>

                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                min="0"
                                placeholder="Enter experience"
                                required
                            />
                        </div>

                        {/* STATUS */}

                        <div className="form-group">
                            <label>Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                    </div>

                    {/* FORM BUTTONS */}

                    <div className="trainer-form-actions">

                        <button
                            type="submit"
                            disabled={saving}
                        >
                            {saving
                                ? "Saving..."
                                : editingId
                                    ? "Update Trainer"
                                    : "Add Trainer"}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </form>
            </div>

            {/* TRAINER TABLE */}

            <div className="trainer-table-card">

                <h2>All Trainers</h2>

                {loading ? (

                    <p>Loading trainers...</p>

                ) : trainers.length === 0 ? (

                    <p>
                        No trainers found. Add your first trainer.
                    </p>

                ) : (

                    <div className="table-responsive">

                        <table className="trainer-table">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Specialization</th>
                                    <th>Experience</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {trainers.map((trainer) => (

                                    <tr key={trainer._id}>

                                        <td>{trainer.name}</td>

                                        <td>{trainer.age}</td>

                                        <td>{trainer.gender}</td>

                                        <td>{trainer.email}</td>

                                        <td>{trainer.phone}</td>

                                        <td>{trainer.specialization}</td>

                                        <td>
                                            {trainer.experience} years
                                        </td>

                                        <td>
                                            <span
                                                className={`status-badge ${trainer.status?.toLowerCase()}`}
                                            >
                                                {trainer.status}
                                            </span>
                                        </td>

                                        {/* EDIT AND DELETE BUTTONS */}

                                        <td>
                                            <div className="action-buttons">

                                                <button
                                                    type="button"
                                                    className="edit-btn"
                                                    onClick={() => handleEdit(trainer)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(trainer._id)}
                                                >
                                                    Delete
                                                </button>

                                            </div>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Trainers;
