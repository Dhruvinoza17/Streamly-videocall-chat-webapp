import axios from 'axios';

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_API_URL || "/api";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,  // send cookies with requests
});

export default axiosInstance;