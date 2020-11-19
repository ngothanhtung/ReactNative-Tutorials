import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

export default function ChatApplication() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{title: 'Đăng nhập', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
