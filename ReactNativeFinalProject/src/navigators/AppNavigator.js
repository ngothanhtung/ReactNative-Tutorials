import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';


const AppNavigator = createSwitchNavigator({
  Stack: StackNavigator,
  Drawer: DrawerNavigator
  // Tab: TabNavigator,

});
export default AppNavigator;