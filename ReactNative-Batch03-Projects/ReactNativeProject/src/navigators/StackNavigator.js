import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import RegisterScreen from '../screens/StackScreens/RegisterScreen';
import ProductsScreen from '../screens/StackScreens/ProductsScreen';
import ProductDetailsScreen from '../screens/StackScreens/ProductDetailsScreen';
import CheckoutScreen from '../screens/StackScreens/CheckoutScreen';

const RouteConfigs = {
  ProductsScreen: {
    screen: ProductsScreen
  },
  ProductDetailsScreen: {
    screen: ProductDetailsScreen
  },
  CheckoutScreen: {
    screen: CheckoutScreen
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
  RegisterScreen: {
    screen: RegisterScreen
  },

}
const StackNavigatorConfig = {
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    // header: null,
    headerStyle: {
      // backgroundColor: '#f4511e',
    },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  },
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);