import api from "./appClient"

export const getTemplates = () =>{
   return api.get('/templates')
}

export const getTemplateByType = (type:string) =>{
    return api.get(`/templates/${type}`)
}

export const getTemplateById = (id: string) =>{
    return api.get(`/templates/${id}`)
}

export const likeTemplate = (id:string) =>{
    return api.post(`/templates/${id}/like`)
}

export const bookmarkTemplate = (id:string) =>{
    return api.post(`/templates/${id}/bookmark`)
}