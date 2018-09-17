import { createStackNavigator } from 'react-navigation';
import NewsListScreen from './NewsListScreen';
import NewsDetailsScreen from './NewsDetailsScreen';


const RouteConfigs = {
  NewsListScreen: {
    screen: NewsListScreen
  },
  NewsDetailsScreen: {
    screen: NewsDetailsScreen
  },
}
const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      // backgroundColor: '#f4511e',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      // fontWeight: 'bold',
    },
  },
}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);