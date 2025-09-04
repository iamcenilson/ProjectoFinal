import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.137.39:4000/api",
});

export default api;
