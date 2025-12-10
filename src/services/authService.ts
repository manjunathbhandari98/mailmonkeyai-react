import api from "./appClient";

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
