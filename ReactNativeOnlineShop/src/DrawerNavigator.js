import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import AddressScreen from './screens/DrawerScreens/AddressScreen';
import PaymentScreen from './screens/DrawerScreens/PaymentScreen';
import TabNavigator from './TabNavigator';

const routeConfigs = {
  Tab: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'Go back More'
    }
  },

  AddressScreen: {
    screen: createStackNavigator({ screen: AddressScreen })
  },

  PaymentScreen: {
    screen: createStackNavigator({ screen: PaymentScreen })
  },
};

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} onItemPress={(item) => {
        props.navigation.navigate('AccountScreen');
        props.navigation.dispatch(DrawerActions.closeDrawer());
        // props.navigation.navigate(item.route.routeName);
      }}
      />
    </SafeAreaView>
  </ScrollView>
);

const drawerNavigatorConfig = {
  contentComponent: CustomDrawerContentComponent,
  drawerPosition: 'right',
  contentOptions: {
    activeTintColor: '#ffffff',
    activeBackgroundColor: '#0652DD',    
  }
};

export default createDrawerNavigator(routeConfigs, drawerNavigatorConfig);