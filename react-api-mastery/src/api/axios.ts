import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    console.log("Request Intercepted");

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("Response Received");
    return response;
  },
  (error) => {
    console.log("API Error");

    const status = error.response?.status;

    switch (status) {
      case 401:
        console.log("Unauthorized");
        localStorage.removeItem("token");
        window.location.href = "/login";
        break;

      case 403:
        console.log("Forbidden");
        break;

      case 500:
        console.log("Server Error");
        break;

      default:
        console.log("Unknown Error");
    }

    return Promise.reject(error);
  }
);

export default api;