import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Register a user
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login a user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add a task
export const addTask = async (taskData) => {
  try {
    const response = await api.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
