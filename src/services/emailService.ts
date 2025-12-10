import type { EmailGenerationFormData } from "../pages/Generator/EmailGenerator";
import type { EmailImprovementRequest } from "../types";
import api from "./appClient";

export const generateEmail = async (data:EmailGenerationFormData) =>{
   return api.post('/email/generate',data)
}

export const improveEmail = async (data:EmailImprovementRequest) =>{
    return api.post('/email/impove',data)
}


export const saveGeneratedEmail = async (data:{
    subject:string;
    content:string;
    type:string;
    tone:string
}) =>{
    return api.post('/email/save',data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}