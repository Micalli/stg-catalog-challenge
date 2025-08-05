import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";
import { API_CONFIG } from "../config/api";


export const httpClient = axios.create({
  baseURL: API_CONFIG.baseURL,
});

// Intercepta todas as requisições e adiciona o token
httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
   (error) => {
    if (error.response?.status === 401 ) {
      localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
