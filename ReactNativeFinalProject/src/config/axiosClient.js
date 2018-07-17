import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.60.214:9000',
  headers: {
    'Content-Type': 'application/json'
  }
});


export default axiosClient;