import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:9000/onlineshop',
  headers: {
    'Content-Type': 'application/json'
  }
});


export default client;