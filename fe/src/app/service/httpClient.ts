import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";
import { API_CONFIG } from "../config/api";

console.log("API baseURL configurada:", API_CONFIG.baseURL);

export const httpClient = axios.create({
  baseURL: API_CONFIG.baseURL,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
