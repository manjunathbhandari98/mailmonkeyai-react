import axios from "axios";
import type { EmailGenerationFormData } from "../pages/Generator/EmailGenerator";
import type { EmailImprovementRequest } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const generateEmail = async (data:EmailGenerationFormData) =>{
    const token = localStorage.getItem('accessToken');
    try {
        const res = await axios.post(`${BASE_URL}/email/generate`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
     console.error(error);
        
    }
}

export const improveEmail = async (data:EmailImprovementRequest) =>{
    const token = localStorage.getItem("accessToken");
    try {
        const res = await axios.post(`${BASE_URL}/email/improve`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return res.data;
    } catch (error) {
        console.error(error);
        
    }
}