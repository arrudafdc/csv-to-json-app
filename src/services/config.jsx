import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://csv-to-json-server.onrender.com/",
});

export default axiosAPI;
