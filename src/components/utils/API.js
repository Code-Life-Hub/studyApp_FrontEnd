import axios from "axios";

const API = axios.create({
  baseURL: "https://studyapp-backend-bjka.onrender.com/api",
});

export default API;
