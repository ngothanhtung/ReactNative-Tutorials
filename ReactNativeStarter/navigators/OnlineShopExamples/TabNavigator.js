import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './TabScreens/HomeScreen';
import CheckoutScreen from './TabScreens/CheckoutScreen';
import ProductsStackNavigator from './ProductsStackNavigator';

const TabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  ProductScreen: ProductsStackNavigator,
  CheckoutScreen: CheckoutScreen
});

export default TabNavigator;