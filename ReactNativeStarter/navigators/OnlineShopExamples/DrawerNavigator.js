import { createDrawerNavigator } from 'react-navigation';
import AddressScreen from './DrawerScreens/AddressScreen';
import PaymentScreen from './DrawerScreens/PaymentScreen';

const DrawerNavigator = createDrawerNavigator({
  AddressScreen: AddressScreen,
  PaymentScreen: PaymentScreen
});

export default DrawerNavigator;