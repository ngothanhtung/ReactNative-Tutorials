import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { createBottomTabNavigator, DrawerActions } from 'react-navigation';
import HomeScreen from './screens/TabScreens/HomeScreen';

import CheckoutScreen from './screens/TabScreens/CheckoutScreen';
import HomeStackNavigator from './screens/TabScreens/HomeStackNavigator';
import MoreStackNavigator from './screens/TabScreens/MoreStackNavigator';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AccountScreen from './screens/TabScreens/AccountScreen';
import ProductStackNavigator from './screens/TabScreens/ProductStackNavigatior';

const styles = StyleSheet.create({
  icon: {
    color: '#ffffff',
  },
  label: {
    color: '#ffffff'
  }
});

// https://reactnavigation.org/docs/en/tab-navigator.html

const routeConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: <Icon style={styles.icon} name="home" size={24} />
    }
  },
  ProductStackNavigator: {
    screen: ProductStackNavigator,
    navigationOptions: {
      title: 'Products',
      tabBarIcon: <Icon style={styles.icon} name="apps" size={24} />
    }
  },
  ShoppingCartScreen: {
    screen: CheckoutScreen,
    navigationOptions: {
      title: 'Carts',
      tabBarIcon: <Icon style={styles.icon} name="cart" size={24} />
    }
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      title: 'Account',
      tabBarIcon: <Icon style={styles.icon} name="account" size={24} />
    }
  },
  MoreScreen: {
    screen: CheckoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'More',
      tabBarIcon: <Icon style={styles.icon} name="settings" size={24} />,
      tabBarOnPress: (previousScene, scene, jumpToIndex) => {
        //alert(scene);
        navigation.dispatch(DrawerActions.openDrawer());
      }
    })
  },
}

const bottomTabNavigatorConfig = {
  tabBarOptions: {
    labelStyle: styles.label,
    activeBackgroundColor: '#0652DD',
    inactiveBackgroundColor: '#0984e3'
  }
}

const TabNavigator = createBottomTabNavigator(routeConfigs, bottomTabNavigatorConfig);

export default TabNavigator;