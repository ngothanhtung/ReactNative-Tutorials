import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import colors from '../../../constants/colors';

const routeConfigs = {
  CategoriesScreen: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Categories',
      // header: null,
    }),
  },
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
      // header: null,
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
  // headerMode: 'none',
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.PRIMARY,
    },
  },
};

const stackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default stackNavigator;
