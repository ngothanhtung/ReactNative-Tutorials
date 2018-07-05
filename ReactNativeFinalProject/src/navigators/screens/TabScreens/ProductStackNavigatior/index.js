import { createStackNavigator } from 'react-navigation';
import ProductScreen from './ProductScreen';
import ProductDetailScreen from './ProductDetailScreen';

const ProductStackNavigator = createStackNavigator({
  ProductScreen: ProductScreen,
  ProductDetailScreen: ProductDetailScreen,
});

export default ProductStackNavigator;
