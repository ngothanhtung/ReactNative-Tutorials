import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function StackNavigatorExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Đăng nhập vào hệ thống bán hàng', headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Đăng ký tài khoản' }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ title: 'Quên mật khẩu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
