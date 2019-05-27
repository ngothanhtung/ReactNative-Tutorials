// https://reactnavigation.org/docs/en/hello-react-navigation.html
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

// createStackNavigator(RouteConfigs, StackNavigatorConfig);
// Screens
const RouteConfigs = {
	// RouteName:
	HomeScreen: {
		screen: HomeScreen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Trang chủ',
		}),
	},
	// RouteName:
	LoginScreen: {
		screen: LoginScreen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Đăng nhập he thong',
			headerBackTitle: 'Đăng nhập',
		}),
	},
	// RouteName:
	RegisterScreen: {
		screen: RegisterScreen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Đăng ký',
			// header: null,
		}),
	},
};

// Settings
const StackNavigatorConfig = {
	// Chỉ định màn hình đầu tiên xuất hiện, mặc định nếu khong có thì sẽ lấy cái thứ 1.
	initialRouteName: 'LoginScreen',
	initialRouteParams: { message: 'Hello from Config' },
	// Các option áp dụng chung cho tất cả các màn hình trong StackNavigation
	defaultNavigationOptions: ({ navigation }) => ({
		// header: null,
		headerStyle: {
			backgroundColor: '#192a56',
		},
		headerTitleStyle: {
			// color: 'white',
		},
		headerTintColor: 'yellow',
		headerBackTitleStyle: { color: 'white' },
		headerTransparent: true,
		headerBackgroundTransitionPreset: 'fade',
		headerRight: (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('HomeScreen');
				}}>
				<Icon name='home' size={24} />
			</TouchableOpacity>
		),
	}),
};

const StackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default StackNavigator;
// export default createAppContainer(AppNavigator);
