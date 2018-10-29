import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigation';
// import TabNavigator from '../navigators/TabNavigator';
// import DrawerNavigator from './DrawerNavigator';

const RouteConfigs = {
  StackScreen: {
    screen: StackNavigator
  },
  // DrawerScreen: {
  //   screen: DrawerNavigator
  // },
  // TabScreen: {
  //   screen: TabNavigator
  // },
}
const SwitchNavigatorConfig = {

}

export default createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);