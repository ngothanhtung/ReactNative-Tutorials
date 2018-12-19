import { createStackNavigator } from 'react-navigation';
import CheckoutScreen from './CheckOutScreen';

export default MoreStackNavigator = createStackNavigator({
  CheckoutScreen: {
    screen: CheckoutScreen,
    navigationOptions: {
      header: null,
      title: 'Check out'
    }
  },
});