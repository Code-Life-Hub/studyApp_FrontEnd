import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api/users", // Backend base URL
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
