import axios from "axios";
import { AppError } from "../utils/AppError";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data.message) {
      return Promise.reject(new AppError(error.response.data.message));
    }

    return Promise.reject(error);
  }
);

export { api };
