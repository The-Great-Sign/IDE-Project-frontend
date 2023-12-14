import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003',
  headers: headers,
  withCredentials: true,
});

export default axiosInstance;
