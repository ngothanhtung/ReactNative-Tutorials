import { createStackNavigator } from 'react-navigation';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import colors from '../../../../constants/colors';

const ProductStackNavigator = createStackNavigator(
  {
    ProductScreen: {
      screen: ProductsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Products',
      })
    },
    ProductDetailsScreen: {
      screen: ProductDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Product Details',
      })
    },
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: colors.purpleColor },
      headerTintColor: colors.lightColor
    }
  }
);

export default ProductStackNavigator;
