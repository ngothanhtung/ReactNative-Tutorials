// https://reactnavigation.org/docs/en/hello-react-navigation.html
import { createStackNavigator } from 'react-navigation';
import NewsListScreen from './NewsListScreen';
import NewsDetailsScreen from './NewsDetailsScreen';

// createStackNavigator(RouteConfigs, StackNavigatorConfig);
// Screens
const RouteConfigs = {
	// RouteName:
	NewsListScreen: {
		screen: NewsListScreen, // Component
		navigationOptions: () => ({
			title: 'News List',
		}),
	},
	// RouteName:
	NewsDetailsScreen: {
		screen: NewsDetailsScreen, // Component
		navigationOptions: () => ({
			title: 'News Details',
		}),
	},
};

// Settings
const StackNavigatorConfig = {};

const StackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default StackNavigator;
// export default createAppContainer(AppNavigator);
