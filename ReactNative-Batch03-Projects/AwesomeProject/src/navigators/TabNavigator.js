import React from 'react';
import { createBottomTabNavigator, DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import AboutScreen from '../screens/TabScreens/AboutScreen';
import NewsScreen from '../screens/TabScreens/NewsScreens';
import AccountScreen from '../screens/TabScreens/AccountScreen';


const RouteConfigs = {
  HomeScreen: {
    screen: HomeScreen
  }
  ,
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      tabBarIcon: <Icon name='earth' size={24} />
    }
  },
  AboutScreen: {
    screen: AboutScreen
  },
  AccountScreen: {
    screen: AccountScreen
  },
  MoreScreen: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'More',
      tabBarIcon: <Icon name="settings" size={24} />,
      tabBarOnPress: (previousScene, scene, jumpToIndex) => {
        //alert(scene);
        navigation.dispatch(DrawerActions.openDrawer());
      }
    })
  },
}
const BottomTabNavigatorConfig = {
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: '#dfe6e9',
    inactiveBackgroundColor: '#b2bec3'
  }
}

export default createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);