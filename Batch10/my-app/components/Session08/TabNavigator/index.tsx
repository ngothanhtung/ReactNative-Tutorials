import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartScreen from './screens/CartScreens';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreens';
import NotificationScreens from './screens/NotificationScreens';
import ProfileScreens from './screens/ProfileScreens';

import StackNavigator from '../StackNavigator';

import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

type Props = {};

const TabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF6C44',
        tabBarInactiveTintColor: '#898B9A',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ focused, color, size }) => <Feather name='home' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='News'
        component={StackNavigator}
        options={{
          title: 'Sản phẩm',
          tabBarIcon: ({ focused, color, size }) => <Feather name='grid' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Giỏ hàng',
          tabBarIcon: ({ focused, color, size }) => <Feather name='shopping-cart' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreens}
        options={{
          title: 'Thông báo',
          tabBarIcon: ({ focused, color, size }) => <Feather name='bell' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreens}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ focused, color, size }) => <Feather name='user' size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
