import { createTabNavigator } from 'react-navigation';
import HomeScreen from './TabScreens/HomeScreen';
import ProductScreen from './TabScreens/ProductScreen';
import CheckoutScreen from './TabScreens/CheckoutScreen';

const TabNavigator = createTabNavigator({
  HomeScreen: HomeScreen,
  ProductScreen: ProductScreen,
  CheckoutScreen: CheckoutScreen
});

export default TabNavigator;