import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MaterialBottomTabNavigator from '../TabNavigators/MaterialBottomTabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainTab' component={MaterialBottomTabNavigator} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Đăng nhập', headerShown: true }} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ title: 'Quên mật khẩu' }} />
    </Stack.Navigator>
  );
}
