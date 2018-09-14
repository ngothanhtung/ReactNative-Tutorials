import { createSwitchNavigator } from 'react-navigation';
import StackNavigator from '../navigators/StackNavigator';
import TabNavigator from '../navigators/TabNavigator';

const RouteConfigs = {
  StackScreen: {
    screen: StackNavigator
  },
  TabScreen: {
    screen: TabNavigator
  },
}
const SwitchNavigatorConfig = {

}

export default createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);