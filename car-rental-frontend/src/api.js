import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Sign Up
export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

// Sign In
export const signin = async (userData) => {
  const response = await api.post("/auth/signin", userData);
  return response.data;
};

// Fetch Cars
export const fetchCars = async () => {
  const response = await api.get("/cars");
  return response.data;
};
