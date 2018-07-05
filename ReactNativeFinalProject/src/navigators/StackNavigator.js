import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/StackScreens/MainScreen';
import LoginScreen from './screens/StackScreens/LoginScreen';

const StackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default StackNavigator;