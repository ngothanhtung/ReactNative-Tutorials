import { createDrawerNavigator } from 'react-navigation';
import AddressScreen from './DrawerScreens/AddressScreen';
import PaymentScreen from './DrawerScreens/PaymentScreen';
import TabNavigator from './TabNavigator';

const DrawerNavigator = createDrawerNavigator({
  Tab: TabNavigator,
  AddressScreen: AddressScreen,
  PaymentScreen: PaymentScreen
});

export default DrawerNavigator;