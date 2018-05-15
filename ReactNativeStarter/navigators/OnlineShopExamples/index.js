import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const SwitchNavigator = createSwitchNavigator({
  Stack: StackNavigator,
  Tab: TabNavigator,
  Drawer: DrawerNavigator
});

export default SwitchNavigator;