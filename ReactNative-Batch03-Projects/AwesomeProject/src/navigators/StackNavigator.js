import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import RegisterScreen from '../screens/StackScreens/RegisterScreen';
import ProductsScreen from '../screens/StackScreens/ProductsScreen';
import ProductDetailsScreen from '../screens/StackScreens/ProductDetailsScreen';

const RouteConfigs = {
  ProductsScreen: {
    screen: ProductsScreen
  },
  ProductDetailsScreen: {
    screen: ProductDetailsScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
}
const StackNavigatorConfig = {
  navigationOptions: {
    header: null,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);