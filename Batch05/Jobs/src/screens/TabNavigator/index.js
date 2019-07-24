// https://reactnavigation.org/docs/en/hello-react-navigation.html
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import Tab4Screen from './Tab4Screen';
import NewsStackNavigator from './NewsStackNavigator';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

import WorkItemNavigator from './WorkItemNavigator';

// Screens
const RouteConfigs = {
  // RouteName:
  WorkItemTab: {
    screen: WorkItemNavigator, // Component
    navigationOptions: ({ navigation }) => ({
      title: 'Workitems',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Icon color={tintColor} name='home' size={sizes.ICON} />;
      },
    }),
  },
  // RouteName:
  Tab1Screen: {
    screen: Tab1Screen, // Component
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Icon color={tintColor} name='home' size={sizes.ICON} />;
      },
    }),
  },
  // RouteName:
  Tab2Screen: {
    screen: NewsStackNavigator, //Tab2Screen, // Component
    navigationOptions: ({ navigation }) => ({
      title: 'News',
      tabBarIcon: <Icon color='#bdc3c7' name='earth' size={sizes.ICON} />, //React Element
    }),
  },
  // RouteName:
  Tab3Screen: {
    screen: Tab3Screen, // Component
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      // tabBarVisible: false,
      tabBarIcon: <Icon color='#bdc3c7' name='account' size={sizes.ICON} />, //React Element
    }),
  },
  // RouteName:
  Tab4Screen: {
    screen: Tab4Screen, // Component
    navigationOptions: ({ navigation }) => ({
      title: 'Logout',
      tabBarIcon: <Icon color='#bdc3c7' name='close' size={sizes.ICON} />, //React Element
    }),
  },
};

const BottomTabNavigatorConfig = {
  defaultNavigationOptions: {},
  tabBarOptions: {
    style: { borderTopWidth: 0 },
    tabStyle: {},
    labelStyle: {
      fontWeight: '400',
      // fontSize: 11,
    },
    activeTintColor: 'white',
    // inactiveTintColor: '#bdc3c7',
    activeBackgroundColor: colors.LIGHT,
    inactiveBackgroundColor: colors.PRIMARY,
    showLabel: true,
    showIcon: true,
  },
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
export default TabNavigator;
