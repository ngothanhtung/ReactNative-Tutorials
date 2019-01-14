import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './TabScreens/HomeScreen'
import ProductScreen from './TabScreens/ProductScreen'
import ShoppingCartScreen from './TabScreens/ShoppingCartScreen'
import AccountScreen from './TabScreens/AccountScreen'

import ProductStackNavigator from './TabScreens/ProductStackNavigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const routeConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Trang chủ',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon style={{ color: 'white' }} name="home" size={20} />
    }),
  },
  ProductStackNavigator: {
    screen: ProductStackNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Sản phẩm',
      tabBarIcon: <Icon name="apps" size={20} style={{ color: 'white' }} />
    }),
  },
  ShoppingCartScreen: {
    screen: ShoppingCartScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Giỏ hàng',
      tabBarIcon: <Icon name="cart" size={20} style={{ color: 'white' }} />
    }),
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tài khoản',
      tabBarIcon: <Icon name="account" size={20} style={{ color: 'white' }} />
    }),
  }
};
const tabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#74b9ff',
    inactiveBackgroundColor: '#0984e3',
  }
};

const tabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default tabNavigator;

