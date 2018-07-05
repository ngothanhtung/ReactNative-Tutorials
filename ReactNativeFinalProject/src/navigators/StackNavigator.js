import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/StackScreens/MainScreen';
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
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default StackNavigator;