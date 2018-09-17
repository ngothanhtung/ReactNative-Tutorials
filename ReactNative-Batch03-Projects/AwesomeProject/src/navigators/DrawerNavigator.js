import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import AddressScreen from '../screens/DrawerScreens/AddressScreen';
import PaymentScreen from '../screens/DrawerScreens/PaymentScreen';
import TabNavigator from './TabNavigator';

const RouteConfigs = {
  TabScreen: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'Go back'
    }
  },
  AddressScreen: {
    screen: createStackNavigator({ screen: AddressScreen })
  },
  PaymentScreen: {
    screen: createStackNavigator({ screen: PaymentScreen })
  },
}
const DrawerNavigatorConfig = {
  drawerPosition: 'right',
}

export default createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);