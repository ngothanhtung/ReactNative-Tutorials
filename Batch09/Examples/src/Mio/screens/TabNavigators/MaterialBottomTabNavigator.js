import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './screens/HomeStackNavigator';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';
import { useSelector } from 'react-redux';

const ICON_SIZE = 24;

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomTabNavigator() {
  const addedProducts = useSelector((state) => state.shoppingReducer.addedProducts);
  // console.log(addedProducts);
  return (
    <Tab.Navigator shifting={true} barStyle={{ backgroundColor: '#ffffff' }} activeColor='#ffffff' inactiveColor='#2d3436' initialRouteName='HomeScreen' backBehavior='history'>
      <Tab.Screen
        name='HomeScreen'
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'home' : 'home-outline'} size={ICON_SIZE} color={color} />,
          tabBarColor: '#ff4757',
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cloud-search' : 'cloud-search-outline'} size={ICON_SIZE} color={color} />,
          tabBarColor: '#ff6b81',
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cart' : 'cart-outline'} size={ICON_SIZE} color={color} />,
          tabBarBadge: addedProducts?.length,
          tabBarColor: '#ff4757',
        }}
      />
      <Tab.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'heart' : 'heart-outline'} size={ICON_SIZE} color={color} />,
          tabBarColor: '#ff6b81',
        }}
      />
      <Tab.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'bell' : 'bell-outline'} size={ICON_SIZE} color={color} />,
          tabBarBadge: 9,
          tabBarColor: '#ff4757',
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
