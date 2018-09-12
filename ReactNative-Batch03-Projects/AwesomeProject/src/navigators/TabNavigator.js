import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import NewsScreen from '../screens/NewsScreen';
import AccountScreen from '../screens/AccountScreen';

const RouteConfigs = {
  HomeScreen: {
    screen: HomeScreen
  }
  ,
  NewsScreen: {
    screen: NewsScreen
  },
  AboutScreen: {
    screen: AboutScreen
  },
  AccountScreen: {
    screen: AccountScreen
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