import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

const routeConfigs = {
  CategoriesScreen: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Categories',
    }),
  },
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
    }),
  },
  ProductDetailsScreen: {
    screen: ProductDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Product Details',
    }),
  },
};
const stackNavigatorConfig = {
  headerMode: 'none',
};

const stackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default stackNavigator;
