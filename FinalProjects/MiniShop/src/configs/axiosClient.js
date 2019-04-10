import { AsyncStorage } from 'react-native';
import axios from 'axios';
import URL from '../constants/host';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiIxMjMxMjMxMjMiLCJpYXQiOjE1NTQ4OTg0MDIsImV4cCI6MTU1NDkwMjAwMn0.JWeF_BuZ8ggdk7LVDViFzRrrp_pSght_iikTcywzUhk';

// var user = {
//   username: 'admin',
//   password: '123'
// }

// AsyncStorage.setItem('token', JSON.stringify(user));
// var data = await AsyncStorage.getItem('token');
// var obj = JSON.parse(data);

// var token = await AsyncStorage.getItem('token');
// AsyncStorage.setItem('token', tokenFromLogin);
const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,
  },
});

export default axiosClient;
