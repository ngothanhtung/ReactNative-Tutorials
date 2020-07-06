import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import TabNavigator from './TabNavigator';

import * as routes from '../routes';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.AUTH_LOGIN_SCREEN}
          component={LoginScreen}
          options={{title: 'Đăng nhập', headerShown: true}}
        />
        <Stack.Screen
          name={routes.AUTH_REGISTER_SCREEN}
          component={RegisterScreen}
          options={{title: 'Đăng ký', headerShown: true}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
