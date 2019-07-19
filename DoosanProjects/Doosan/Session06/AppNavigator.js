import { createAppContainer } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import SwitchNavigator from './SwitchNavigator';

export default createAppContainer(SwitchNavigator);
