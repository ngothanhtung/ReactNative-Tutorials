import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import AddressScreen from '../screens/DrawerScreens/AddressScreen';
import PaymentScreen from '../screens/DrawerScreens/PaymentScreen';
import TabNavigator from './TabNavigator';

// Trường hợp muốn design lại drawer
const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} onItemPress={(item) => {
        props.navigation.closeDrawer();
        props.navigation.navigate(item.route.routeName);
      }}
      />
    </SafeAreaView>
  </ScrollView>
);

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
  // Trường hợp muốn design lại drawer
  contentComponent: CustomDrawerContentComponent,
  // Thiết lập vị trí xuất hiện
  drawerPosition: 'right',
  // Thiệt lập màu nền
  drawerBackgroundColor: 'white',
  contentOptions: {
    activeTintColor: '#ffffff',
    activeBackgroundColor: '#0652DD',
  }
}

export default createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);