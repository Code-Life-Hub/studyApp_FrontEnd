import axios from "axios";

const API = axios.create({
  baseURL: "https://study-buddy-ewbor.ondigitalocean.app:8080",
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;
