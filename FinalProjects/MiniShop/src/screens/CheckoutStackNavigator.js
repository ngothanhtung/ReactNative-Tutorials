import { createStackNavigator } from 'react-navigation';
import CheckoutScreen from './CheckoutScreen';
import colors from '../constants/colors';

const routeConfigs = {
  CheckoutScreen: {
    screen: CheckoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'CHECK OUT',
    }),
  },
};
const stackNavigatorConfig = {
  // mode: 'card', // default: 'card'
  // headerMode: 'screen', // 'none', 'float', default 'screen'
  // headerTransitionPreset: 'fade-in-place',
  // headerBackTitleVisible: true,
  headerTintColor: 'white',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.PRIMARY,
    },
  },
};

const StackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
export default StackNavigator;
// export default MyStack;
