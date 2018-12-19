import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const HomeStackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  ProductScreen: ProductScreen,
});

export default HomeStackNavigator;