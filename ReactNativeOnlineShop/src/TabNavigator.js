import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './TabScreens/HomeScreen';
import ProductScreen from './TabScreens/ProductScreen';
import CheckoutScreen from './TabScreens/CheckoutScreen';
import HomeStackNavigator from './TabScreens/HomeStackNavigator';

const TabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  ProductScreen: ProductScreen,
  CheckoutScreen: CheckoutScreen
});

export default TabNavigator;