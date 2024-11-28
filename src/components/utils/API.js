import axios from "axios";

const API = axios.create({
  baseURL: "https://studyapp-backend-bjka.onrender.com/api/users",
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;
