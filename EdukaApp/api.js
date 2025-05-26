import axios from "axios";

const api = axios.create({
  baseURL: "http://10.42.0.147:5000/api",
});

export default api;
