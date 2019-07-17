import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import StackNavigator from './StackNavigator';

const RouteConfigs = {
  StackNavigator: {
    screen: StackNavigator,
  },
};
const SwitchNavigatorConfig = {};

const SwitchNavigator = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
export default createAppContainer(SwitchNavigator);
