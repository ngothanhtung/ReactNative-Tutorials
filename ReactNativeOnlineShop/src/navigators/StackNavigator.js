import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/StackScreens/LoginScreen';

const StackNavigator = createStackNavigator({
  LoginScreen: LoginScreen
});

export default StackNavigator;