import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './TabScreens/HomeScreen';
import CheckoutScreen from './TabScreens/CheckoutScreen';
import ProductsStackNavigator from './ProductsStackNavigator';
import ShoppingCartScreen from './ShoppingCartScreen';

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  ProductScreen: {
    screen: ProductsStackNavigator,
    navigationOptions: {
      title: 'Products',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-apps' : 'ios-apps-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  ShoppingCartScreen: {
    screen: ShoppingCartScreen,
    navigationOptions: {
      title: 'Carts',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-cart' : 'ios-cart-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  CheckoutScreen: {
    screen: CheckoutScreen,
    navigationOptions: {
      title: 'Checkout',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-cart' : 'ios-cart-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  }
});

export default TabNavigator;