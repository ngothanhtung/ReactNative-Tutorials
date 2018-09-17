import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import RegisterScreen from '../screens/StackScreens/RegisterScreen';

const RouteConfigs = {
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