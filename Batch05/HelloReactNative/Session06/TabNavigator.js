// https://reactnavigation.org/docs/en/hello-react-navigation.html
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';

// Screens
const RouteConfigs = {
	// RouteName:
	Tab1Screen: {
		screen: Tab1Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				return <Icon color={tintColor} name='home' size={focused ? 24 : 24} />;
			},
		}),
	},
	// RouteName:
	Tab2Screen: {
		screen: Tab2Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'News',
			tabBarIcon: <Icon color='#bdc3c7' name='earth' size={24} />, //React Element
		}),
	},
	// RouteName:
	Tab3Screen: {
		screen: Tab3Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Account',
			// tabBarVisible: false,
			tabBarIcon: <Icon color='#bdc3c7' name='account' size={24} />, //React Element
		}),
	},
	// RouteName:
	Tab4Screen: {
		screen: Tab4Screen, // Component
		navigationOptions: ({ navigation }) => ({
			title: 'Logout',
			tabBarIcon: <Icon color='#bdc3c7' name='close' size={24} />, //React Element
		}),
	},
};

const BottomTabNavigatorConfig = {
	defaultNavigationOptions: {},
	tabBarOptions: {
		style: { backgroundColor: '#6F1E51' },
		tabStyle: { height: 54 },
		activeTintColor: 'yellow',
		inactiveTintColor: '#bdc3c7',
		// activeBackgroundColor: 'yellow',
		inactiveBackgroundColor: '#6F1E51',
		showLabel: true,
		showIcon: true,
	},
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);

export default createAppContainer(TabNavigator);
