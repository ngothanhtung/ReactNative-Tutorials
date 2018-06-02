import { createStackNavigator } from 'react-navigation';
import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';


const StackNavigator = createStackNavigator({
  CategoriesScreen: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Categories',
    },
  },
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: {
      title: 'Products',
    },
  },
  ProductDetailsScreen: {
    screen: ProductDetailsScreen, navigationOptions: {
      title: 'Details',
    },
  },
});

export default StackNavigator;