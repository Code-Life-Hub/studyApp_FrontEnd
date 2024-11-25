import axios from "axios";

// http://localhost:3001
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/users",
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;
