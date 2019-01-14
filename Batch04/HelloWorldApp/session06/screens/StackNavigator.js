import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './StackScreens/LoginScreen'
import RegisterScreen from './StackScreens/RegisterScreen'

const routeConfigs = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'LOGIN',
    }),
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'REGISTER',
    }),
  }
};
const stackNavigatorConfig = {};

const stackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default stackNavigator;