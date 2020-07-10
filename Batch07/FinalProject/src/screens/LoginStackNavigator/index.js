import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator
      // headerMode="none"
      initialRouteName="LoginScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Đăng nhập', headerShown: false}}
      />
      <Stack.Screen
        initialParams={{message: 'Init text'}}
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Đăng ký',
          headerBackTitle: 'Quay lại',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
