import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode='float'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Đăng nhập vào hệ thống bán hàng', headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Đăng ký tài khoản' }} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ title: 'Quên mật khẩu' }} />
    </Stack.Navigator>
  );
}
