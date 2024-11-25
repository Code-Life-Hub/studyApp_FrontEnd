import axios from "axios";
// http://localhost:3001
const API = axios.create({
  baseURL: "https://studyapp-backend-bjka.onrender.com/api/users", // Backend base URL
});

API.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

API.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export default API;
