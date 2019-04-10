import axios from 'axios';
import URL from '../constants/host';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiIxMjMxMjMxMjMiLCJpYXQiOjE1NTQ4OTg0MDIsImV4cCI6MTU1NDkwMjAwMn0.JWeF_BuZ8ggdk7LVDViFzRrrp_pSght_iikTcywzUhk';

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
});

export default axiosClient;
