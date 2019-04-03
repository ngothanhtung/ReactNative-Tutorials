import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import CheckoutStackNavigator from './CheckoutStackNavigator';

const routeConfigs = {
  // StackNavigator: StackNavigator,
  // TabNavigator: TabNavigator,
  DrawerNavigator: DrawerNavigator,
  CheckoutStackNavigator: CheckoutStackNavigator,
  // ShipperStackNavigator: ShipperStackNavigator,
};

const switchNavigatorConfig = {};

const switchNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);
export default createAppContainer(switchNavigator);
