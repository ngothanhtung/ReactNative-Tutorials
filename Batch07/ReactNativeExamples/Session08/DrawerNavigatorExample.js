import * as React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';

import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Menu Item 1"
        labelStyle={{fontWeight: '700'}}
        icon={({focused, color, size}) => (
          <Icon color={color} size={size} name="home" />
        )}
        onPress={() => {
          props.navigation.navigate('Menu1Screen');
          props.navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Menu Item 2"
        labelStyle={{fontWeight: '700'}}
        icon={({focused, color, size}) => (
          <Icon color={color} size={size} name="account" />
        )}
        onPress={() => {
          props.navigation.navigate('Menu2Screen');
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="right"
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{title: 'Main Tab'}}
        />
        <Drawer.Screen name="Menu1Screen" component={Menu1Screen} />
        <Drawer.Screen name="Menu2Screen" component={Menu2Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
