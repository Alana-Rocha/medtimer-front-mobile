import axios from "axios";
import { getData } from "./storage";

const api = axios.create({
  baseURL: "http://192.168.13.58:8080",
  withCredentials: true,
});

api.interceptors.request.use(
  async (request) => {
    const recoveredToken = await getData("token");

    if (recoveredToken) {
      request.headers.Authorization = `Bearer ${recoveredToken}`;
    }

    return Promise.resolve(request);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
