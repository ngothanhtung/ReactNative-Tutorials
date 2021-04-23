import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Feather as Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: true, activeTintColor: '#FF6C44', inactiveTintColor: '#898B9A' }} initialRouteName='HomeScreen' backBehavior='history' sceneContainerStyle={{ backgroundColor: '#FBFBFB' }}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name='home' size={size * 0.8} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color, size }) => <Feather name='search' size={size * 0.8} color={color} />,
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color, size }) => <Feather name='shopping-bag' size={size * 0.8} color={color} />,
        }}
      />
      <Tab.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ focused, color, size }) => <Feather name='heart' size={size * 0.8} color={color} />,
        }}
      />

      <Tab.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused, color, size }) => <Feather name='bell' size={size * 0.8} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 90,
    borderRadius: 45,
    backgroundColor: '#FF6C44',
  },
  label: {},
});
