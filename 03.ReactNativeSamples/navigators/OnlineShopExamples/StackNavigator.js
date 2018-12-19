import { createStackNavigator } from 'react-navigation';
import LoginScreen from './StackScreens/LoginScreen';

const StackNavigator = createStackNavigator({
  LoginScreen: LoginScreen
});

export default StackNavigator;