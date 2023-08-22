import axios from "axios";
import { getAuthToken } from "../utils/authUtils";


const api = axios.create({
    baseURL: "http://localhost:3005/"
})

// Add an interceptor to set the Authorization token for each request
api.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;