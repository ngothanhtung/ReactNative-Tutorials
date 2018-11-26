import React from 'react';
import { createBottomTabNavigator, DrawerActions, createStackNavigator } from 'react-navigation';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import AboutScreen from '../screens/TabScreens/AboutScreen';
import NewsScreen from '../screens/TabScreens/NewsScreens';
import AccountScreen from '../screens/TabScreens/AccountScreen';
import MoreScreen from '../screens/DrawerScreens/MoreScreen';
import ProductsScreen from '../screens/TabScreens/ProductsScreen';


const RouteConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused, tintColor }) => (<FaIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name='plane' size={24} />)
    })
  },
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused, tintColor }) => (<FaIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name='heart' size={20} />)
    })
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused, tintColor }) => (<McIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name='compass' size={24} />)
    })
  },

  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused, tintColor }) => (<McIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name='account' size={26} />)
    })
  },
  HeartScreen: {
    screen: AccountScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused, tintColor }) => (<FaIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name='heart' size={20} />)
    })
  },
  MoreScreen: {
    screen: createStackNavigator({ screen: MoreScreen }),
    navigationOptions: () => ({
      title: 'More',
      tabBarIcon: ({ focused, tintColor }) => <McIcon style={{ color: 'white', opacity: focused ? 1 : 0.5 }} name="menu" size={24} />,
      tabBarOnPress: ({ navigation }) => {
        navigation.openDrawer();
        navigation.navigate('MoreScreen');
        //jumpToIndex(scene.index);
        //navigation.dispatch(DrawerActions.openDrawer());
      }
    })
  },
}
const BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: '#431C60',
    inactiveBackgroundColor: '#431C60'
  }
}

export default createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);