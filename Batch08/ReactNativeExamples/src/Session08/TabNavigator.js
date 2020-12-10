import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';

import ProductStackNavigator from './ProductStackNavigator';

// import DrawerNavigator from './DrawerNavigator';
import CustomDrawerNavigator from './CustomDrawerNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      shifting={false}
      barStyle={{
        // paddingBottom: 32,
        backgroundColor: '# ',
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
        name="Product"
        component={ProductStackNavigator}
        options={{
          title: 'Products',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="apps" color={color} size={24} />;
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

      <Tab.Screen
        name="Menu"
        component={CustomDrawerNavigator}
        options={{
          title: 'Settings',

          tabBarIcon: ({ focused, color }) => {
            return <Icon name="menu" color={focused ? 'white' : color} size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
