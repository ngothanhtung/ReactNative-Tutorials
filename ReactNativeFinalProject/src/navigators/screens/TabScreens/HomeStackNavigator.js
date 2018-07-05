import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';


const HomeStackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,

});

export default HomeStackNavigator;