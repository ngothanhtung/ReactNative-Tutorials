import { createStackNavigator } from 'react-navigation';
import ProductScreen from './ProductScreen';
import ProductDetailScreen from './ProductDetailScreen';
import colors from '../../../../constants/colors';

const ProductStackNavigator = createStackNavigator(
  {
    ProductScreen: {
      screen: ProductScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Products',
      })
    },
    ProductDetailScreen: {
      screen: ProductDetailScreen,
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
