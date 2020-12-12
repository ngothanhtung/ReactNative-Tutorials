import React from 'react';

// Navigators
import { createStackNavigator } from '@react-navigation/stack';

// Screens

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import DrawerNavigator from './DrawerNavigator';

// Create stack navigator
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerBackTitle: 'Back',

          headerLeft: () => {
            return (
              <TouchableOpacity style={{ marginLeft: 12 }}>
                <Icon name="home" size={24} />
              </TouchableOpacity>
            );
          },

          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 12 }}>
                <Icon name="menu" size={24} />
              </TouchableOpacity>
            );
          },
        }}
      />
      {/* <Stack.Screen name="Tab" component={TabNavigator} /> */}
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}
