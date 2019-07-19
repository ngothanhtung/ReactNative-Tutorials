import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/StacKScreens/LoginScreen';
import RegisterScreen from './screens/StacKScreens/RegisterScreen';

const RouteConfigs = {
	LoginScreen: {
		screen: LoginScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'LOGIN',
			header: null,
		}),
	},

	RegisterScreen: {
		screen: RegisterScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'REGISTER',
		}),
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'LoginScreen',
	initialRouteParams: { message: 'Hello' },
	defaultNavigationOptions: {},
	mode: 'modal',
	// headerMode: 'none',
	// headerBackTitleVisible: false,
};

const stack = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default stack;
