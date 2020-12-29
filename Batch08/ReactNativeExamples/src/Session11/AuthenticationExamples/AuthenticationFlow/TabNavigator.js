/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#474787',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="home" color={color} size={24} />;
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notificatons',
          tabBarBadge: true,
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="bell" color={color} size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',

          tabBarIcon: ({ focused, color }) => {
            return <Icon name="account" color={focused ? 'white' : color} size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
