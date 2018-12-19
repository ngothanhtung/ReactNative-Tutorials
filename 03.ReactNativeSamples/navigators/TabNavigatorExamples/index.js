import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import TabItemScreen1 from './TabItemScreen1';
import TabItemScreen2 from './TabItemScreen2';
import MoreScreensStackNavigator from './MoreScreensStackNavigator';
import DrawerNavigator from './DrawerNavigator';

const routeConfigs = {
  TabItem1: {
    screen: TabItemScreen1,
    navigationOptions: {
      title: 'Tab 1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  TabItem2: {
    screen: TabItemScreen2,
    navigationOptions: {
      title: 'Tab 2',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  TabItem3: {
    screen: MoreScreensStackNavigator,
    navigationOptions: {
      title: 'More',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-lock' : 'ios-lock-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
  TabItem4: {
    screen: DrawerNavigator,
    navigationOptions: {      
      title: 'Tab 4 (Drawer)',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name={focused ? 'ios-lock' : 'ios-lock-outline'} size={26} style={{ color: '#2d3436' }} />)
    },
  },
};

const tabNavigatorConfigs = {
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    labelStyle: {
      color: '#2d3436',
    },
    style: {
      //backgroundColor: '#2d3436'
    }
  },
  swipeEnabled: true,
}

export default createBottomTabNavigator(routeConfigs, tabNavigatorConfigs);
