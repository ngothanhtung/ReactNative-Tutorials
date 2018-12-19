import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/StackScreens/LoginScreen';
import LoadingScreen from './screens/StackScreens/LoadingScreen';

const StackNavigator = createStackNavigator({
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }, 
});

export default StackNavigator;