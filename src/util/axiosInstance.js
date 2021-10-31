import {BACKEND_URL} from 'src/config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response.status / 400 === 1) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
