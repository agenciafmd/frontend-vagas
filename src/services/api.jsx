import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me",
});

export default api;
