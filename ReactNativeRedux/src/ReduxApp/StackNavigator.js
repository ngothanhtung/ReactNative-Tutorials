import { createStackNavigator } from 'react-navigation';
import ProductContainer from './Containers/ProductContainer';
import ShoppingCartContainer from './Containers/ShoppingCartContainer';

export default createStackNavigator({
  Product: {
    screen: ProductContainer
  },
  ShoppingCart: {
    screen: ShoppingCartContainer
  }
});