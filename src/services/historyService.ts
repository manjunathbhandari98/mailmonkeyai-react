import api from "./appClient";

export const getHistory = () =>{
    return api.get("/email/history");
}

export const deleteHisotry = (id: string) =>{
    return api.delete(`/email/delete/${id}`)
}