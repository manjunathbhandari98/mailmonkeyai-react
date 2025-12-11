import type { EmailGenerationFormData } from "../pages/Generator/EmailGenerator";
import type { EmailImprovementRequest, SaveEmailRequest } from "../types";
import api from "./appClient";

export const generateEmail = async (data:EmailGenerationFormData) =>{
   return api.post('/email/generate',data)
}

export const improveEmail = async (data:EmailImprovementRequest) =>{
    return api.post('/email/impove',data)
}


export const saveGeneratedEmail = async (data:SaveEmailRequest) =>{
    return api.post('/email/save',data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}

export const getRecentEmails = () =>{
    return api.get('/email/recent')
}