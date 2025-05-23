import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.141:5000/api",
});

export default api;
