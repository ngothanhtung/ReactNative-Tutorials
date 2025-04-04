import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Cấu hình axios client
const apiClient = axios.create({
  baseURL: 'https://server.aptech.io',
  timeout: 10000, // Thời gian timeout (10 giây)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
// request interceptor (Xử lý trước khi gửi request)
apiClient.interceptors.request.use(
  async (config) => {
    // Lấy token từ AsyncStorage
    // Get access token from AsyncStorage
    const user = await AsyncStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    const accessToken = parsedUser?.access_token;

    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  },
);

export default apiClient;
