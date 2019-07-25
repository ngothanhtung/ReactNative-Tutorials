import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/TabScreens/HomeScreen';
import ProductScreen from './screens/TabScreens/ProductScreen';
import NotificationScreen from './screens/TabScreens/NotificationScreen';
import AccountScreen from './screens/TabScreens/AccountScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RouteConfigs = {
	HomeScreen: {
		screen: HomeScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='home' style={{ color: tintColor }} size={focused ? 24 : 24} />,
		}),
	},
	ProductScreen: {
		screen: ProductScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Product',
			tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='apps' style={{ color: tintColor }} size={focused ? 24 : 24} />,
		}),
	},
	NotificationScreen: {
		screen: NotificationScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Notification',
			tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='bell' style={{ color: tintColor }} size={focused ? 24 : 24} />,
		}),
	},
	AccountScreen: {
		screen: AccountScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Account',
			tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon name='account' style={{ color: tintColor }} size={focused ? 24 : 18} />,
		}),
	},
};

const BottomTabNavigatorConfig = {
	tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: 'white',
		activeBackgroundColor: '#0984e3',
		inactiveBackgroundColor: '#74b9ff',
	},
};

const tab = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
export default tab;
