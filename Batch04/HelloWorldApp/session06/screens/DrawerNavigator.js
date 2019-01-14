import { createDrawerNavigator } from 'react-navigation'
import SettingScreen from './DrawerScreen/SettingScreen';
import LogoutScreen from './DrawerScreen/LogoutScreen';
import TabNavigator from './TabNavigator'

const routeConfigs = {
  TabNavigator: {
    screen: TabNavigator
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SETTING',
    }),
  },
  LogoutScreen: {
    screen: LogoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'LOG OUT',
    }),
  }
};
const drawerNavigatorConfig = {};

const drawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default drawerNavigator;
