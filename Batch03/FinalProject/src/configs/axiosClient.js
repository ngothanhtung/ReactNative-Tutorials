import axios from 'axios';
const baseUrl = 'http://192.168.61.33:3000';

const axiosClient = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
