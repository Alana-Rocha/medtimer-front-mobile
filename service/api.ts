import axios from "axios";
import { getData } from "./storage";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

api.interceptors.request.use(
  async (request) => {
    const recoveredToken = await getData("token");
    console.log({ recoveredToken });
 
    if (recoveredToken) {
      request.headers.Authorization = `Bearer ${recoveredToken}`;
    }
 
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
