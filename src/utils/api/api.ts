import axios from "axios";

export const API_URL = "https://api.thecatapi.com/v1";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers["x-api-key"] = `${import.meta.env.VITE_API_KEY}`;
  return config;
});
