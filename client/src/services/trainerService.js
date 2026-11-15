
const API_URL = "http://localhost:5000/api/trainers";

const handleResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "API request failed");
    }

    return data;
};

// Get all trainers
export const getTrainers = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

// Get trainer by ID
export const getTrainerById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

// Add trainer
export const createTrainer = async (trainerData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trainerData)
    });

    return handleResponse(response);
};

// Update trainer
export const updateTrainer = async (id, trainerData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trainerData)
    });

    return handleResponse(response);
};

// Delete trainer
export const deleteTrainer = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    return handleResponse(response);
};
