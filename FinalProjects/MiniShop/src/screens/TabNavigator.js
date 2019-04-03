import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './TabScreens/HomeScreen';
import ProductScreen from './TabScreens/ProductScreen';
import ShoppingCartScreen from './TabScreens/ShoppingCartScreen';
import AccountScreen from './TabScreens/AccountScreen';

import ProductStackNavigator from './TabScreens/ProductStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

import ShoppingCartBadge from '../components/ShoppingCartBadge';

const routeConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Trang chủ',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon color={tintColor} name='home' size={20} />,
    }),
  },
  ProductStackNavigator: {
    screen: ProductStackNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Sản phẩm',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='apps' size={20} color={tintColor} />,
    }),
  },
  ShoppingCartScreen: {
    screen: ShoppingCartScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Giỏ hàng',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <ShoppingCartBadge color={tintColor} />,
    }),
  },
  NotificationScreen: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Thông báo',
      tabBarVisible: true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <View style={{ position: 'relative' }}>
          <Icon color={tintColor} name='bell' size={20} />
          <View
            style={{
              position: 'absolute',
              padding: 2.5,
              height: 18,
              width: 18,
              borderRadius: 50,
              opacity: 1,
              backgroundColor: 'red',
              top: -6,
              right: -8,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'white',
              borderWidth: 1.5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 8, fontWeight: '700' }}>9</Text>
          </View>
        </View>
      ),
      tabBarOnPress: tab => {
        console.log(tab);
        // tab.navigation.navigate('NotificationScreen');
        tab.navigation.openDrawer();
        // alert('Click Tab')
      },
    }),
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tài khoản',
      tabBarVisible: true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='account' size={20} color={tintColor} />,
    }),
  },
};
const tabNavigatorConfig = {
  initialRouteName: 'AccountScreen',
  lazy: true,
  tabBarOptions: {
    style: { height: 60, backgroundColor: colors.PRIMARY },
    // tabStyle: { paddingBottom: 24 },
    showLabel: true,
    // safeAreaInset: { bottom: 'never', top: 'never' },
    activeTintColor: '#fbc531',
    inactiveTintColor: colors.GRAY,
    // activeBackgroundColor: colors.SECONDARY,
    inactiveBackgroundColor: colors.PRIMARY,
  },
};

const tabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
export default tabNavigator;
