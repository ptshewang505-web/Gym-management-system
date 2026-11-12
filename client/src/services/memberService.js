
const API_URL = "http://localhost:5000/api/members";

// Handle API response
const handleResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
};

// GET all members
export const getMembers = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

// GET member by ID
export const getMemberById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

// POST create member
export const createMember = async (memberData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(memberData)
    });

    return handleResponse(response);
};

// PUT update member
export const updateMember = async (id, memberData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(memberData)
    });

    return handleResponse(response);
};

// DELETE member
export const deleteMember = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    return handleResponse(response);
};
