import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:3333/",
});

export default axiosAPI;
