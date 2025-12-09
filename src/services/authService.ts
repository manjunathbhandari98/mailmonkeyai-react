// import axios from "axios";
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

import api from "./appClient";

// export const loginUser = async (credentials: { email: string; password: string }) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    
//     localStorage.setItem("accessToken", response.data.accessToken);
//     localStorage.setItem("refreshToken", response.data.refreshToken);

//     return true; 
//   } catch (error) {
//     console.error("Login failed", error);
//     throw error;
//   }
// };

// export const registerUser = async (userInfo: { fullName: string;  email: string; password: string }) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/register`, userInfo);
//     return response;
//   } catch (error) {
//     console.error("Registration failed");
//     throw error;
//   }
// }

// export const getProfileInfo = async () => {
//   const token = localStorage.getItem("accessToken");
  
//   if (!token) {
//     throw new Error("No access token found");
//   }

//   try {
//     const response = await axios.get(`${BASE_URL}/user/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response)
//     return response.data;
//   } catch (error) {
//     console.error("Failed to load profile data", error);
//     throw error;
//   }
// }

// export const logoutUser = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// }


export const loginUser = async (credentials: { email: string; password: string }) => {
  const res = await api.post("/auth/login", credentials);

  localStorage.setItem("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);

  return true;
};

export const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/auth/register", payload);
};

export const getProfileInfo = async () => {
  const { data } = await api.get("/user/me");
  console.log(data);
  
  return data;

}; 

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
