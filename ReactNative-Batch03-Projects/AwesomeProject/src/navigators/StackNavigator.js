import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const RouteConfigs = {
  HomeScreen: {
    screen: HomeScreen
  },
  AboutScreen: {
    screen: AboutScreen
  },
}
const StackNavigatorConfig = {
  navigationOptions: {
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