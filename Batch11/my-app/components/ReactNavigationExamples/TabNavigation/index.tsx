import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationsTopTabNavigator from './screens/NotificationsTopTabNavigator';
import ProductsStackNavigator from './screens/ProductsStackNavigator';
import SearchScreen from './screens/SearchScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

type Props = {};

const TabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarLabelStyle: {
        //   color: 'red',
        // },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ProductsStack"
        component={ProductsStackNavigator}
        options={{
          title: 'Sản phẩm',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="square" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Tìm kiếm',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="search" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="NotificationsTopTab"
        component={NotificationsTopTabNavigator}
        options={{
          title: 'Thông báo',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="bell" size={24} color={color} />;
          },
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            color: 'white',
            fontSize: 10,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
