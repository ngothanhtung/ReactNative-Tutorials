import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const RouteConfigs = {
	StackNavigator: {
		screen: StackNavigator,
	},
	// TabNavigator: {
	// 	screen: TabNavigator,
	// },
	DrawerNavigator: {
		screen: DrawerNavigator,
	},
};
const SwitchNavigatorConfig = {};

const SwitchNavigator = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
export default SwitchNavigator;
