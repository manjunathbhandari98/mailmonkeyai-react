import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error("Login failed");
        throw error;
    }
}

export const registerUser = async (userInfo: { fullName: string;  email: string; password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userInfo);
        return response.data;
    } catch (error) {
        console.error("Registration failed");
        throw error;
    }
}


export const getProfileInfo = async () =>{
    const token = localStorage.getItem("authToken");
    try {
        const response = await axios.get(`${BASE_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to load data");
        throw error;
        
    }
}