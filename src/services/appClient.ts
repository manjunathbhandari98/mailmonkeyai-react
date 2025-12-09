/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });

  failedQueue = [];
};

const api = axios.create({
  baseURL: BASE_URL,
});

// Attach access token on all requests
api.interceptors.request.use((config) => {
  const access = localStorage.getItem("accessToken");
  if (access) config.headers.Authorization = `Bearer ${access}`;
  return config;
});

// Handle Refresh Token Logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          original.headers.Authorization = "Bearer " + token;
          return api(original);
        });
      }

      isRefreshing = true;

      try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) throw new Error("No refresh token");

        const res = await api.post("/auth/refresh", { refreshToken: refresh });

        const accessToken = res.data.accessToken;
        const refreshToken  = res.data.refreshToken;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        processQueue(null, accessToken);

        original.headers.Authorization = "Bearer " + accessToken;
        return api(original);
      } catch (err) {
        processQueue(err, null);

        // Force logout
        localStorage.clear();
        window.location.href = "/login";
        throw err;
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
