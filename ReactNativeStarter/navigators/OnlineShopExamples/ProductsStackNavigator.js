import { createStackNavigator } from 'react-navigation';
import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';


const StackNavigator = createStackNavigator({
  CategoriesScreen: CategoriesScreen,
  ProductsScreen: ProductsScreen,
  ProductDetailsScreen: ProductDetailsScreen,

});

export default StackNavigator;