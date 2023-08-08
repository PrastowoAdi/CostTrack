import axios from "axios";

const BASE_URL = "https://wild-cyan-dolphin-suit.cyclic.app/";
// const BASE_URL = "http://localhost:8800/";

export const HttpClient = axios.create({
  timeout: 325000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: BASE_URL,
});

HttpClient.interceptors.request.use(function (config) {
  const tokenFromLocal = localStorage.getItem("token");
  const token = JSON.parse(tokenFromLocal!);

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
