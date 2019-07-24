// https://reactnavigation.org/docs/en/hello-react-navigation.html
import { createStackNavigator } from 'react-navigation';
import AddWorkItemScreen from './AddWorkItemScreen';
import WorkItemsScreen from './WorkItemsScreen';

// createStackNavigator(RouteConfigs, StackNavigatorConfig);
// Screens
const RouteConfigs = {
  // RouteName:
  WorkItemsScreen: {
    screen: WorkItemsScreen, // Component
    navigationOptions: () => ({
      title: 'Work items',
    }),
  },
  // RouteName:
  AddWorkItemScreen: {
    screen: AddWorkItemScreen, // Component
    navigationOptions: () => ({
      title: 'Add work item',
    }),
  },
};

// Settings
const StackNavigatorConfig = {};

const StackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default StackNavigator;
