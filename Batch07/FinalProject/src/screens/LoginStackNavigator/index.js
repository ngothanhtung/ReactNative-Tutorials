import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import RegisterScreen from './RegisterScreen';
import MapScreen from './MapScreen';
import SelectionScreen from './SelectionScreen';

const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator
      // headerMode="none"
      initialRouteName="MapScreen"
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
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: 'Đăng nhập', headerShown: false }}
      />
      <Stack.Screen
        initialParams={{ message: 'Init text' }}
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Đăng ký',
          headerBackTitle: 'Quay lại',
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: 'Map', headerShown: false }}
      />

      <Stack.Screen
        name="SelectionScreen"
        component={SelectionScreen}
        options={{ title: 'Selection', headerShown: false }}
      />
    </Stack.Navigator>
  );
}
