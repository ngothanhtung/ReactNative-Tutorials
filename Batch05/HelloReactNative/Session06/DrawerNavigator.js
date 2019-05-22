import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import TabNavigator from './TabNavigator';
import Drawer1Screen from './screens/Drawer1Screen';
import Drawer2Screen from './screens/Drawer2Screen';
// < UI customize
// const CustomDrawerContentComponent = (props) => (
// 	<ScrollView>
// 		<SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
// 			<View style={{ height: 44, backgroundColor: 'green' }}>
// 				<Text>Menu</Text>
// 			</View>
// 			<DrawerItems {...props} />
// 		</SafeAreaView>
// 	</ScrollView>
// );

// 100% customize
const CustomDrawerContentComponent = (props) => {
	return (
		<ScrollView>
			<SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((index) => (
					<TouchableOpacity
						key={index}
						style={{ height: 48, backgroundColor: 'orange', justifyContent: 'center', marginBottom: 1 / 3 }}
						onPress={() => {
							props.navigation.navigate('Drawer2Screen');
							props.navigation.closeDrawer();
						}}>
						<Text>Go to Drawer2Screen</Text>
					</TouchableOpacity>
				))}
			</SafeAreaView>
		</ScrollView>
	);
};

const RouteConfigs = {
	TabNavigator: {
		screen: TabNavigator,
	},
	// RouteName
	Drawer1Screen: {
		screen: Drawer1Screen,
		navigationOptions: ({ navigation }) => ({
			drawerLabel: 'Account Settings',
			drawerIcon: ({ tintColor }) => <Icon name='account' color={tintColor} size={24} />,
		}),
	},
	Drawer2Screen: {
		screen: Drawer2Screen,
		navigationOptions: ({ navigation }) => ({
			drawerLabel: 'Payment Settings',
			drawerIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={24} />,
		}),
	},
};

const DrawerNavigatorConfig = {
	drawerWidth: 300,
	drawerPosition: 'left',
	drawerBackgroundColor: 'white',
	// contentComponent: CustomDrawerContentComponent,
	contentOptions: {
		activeTintColor: 'blue',
	},
};

const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
export default DrawerNavigator;
// export default createAppContainer(AppNavigator);
