import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.72.24:9000',
  headers: {
    'Content-Type': 'application/json'
  }
});


export default axiosClient;