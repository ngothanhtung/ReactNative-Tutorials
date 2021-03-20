/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import ParentTabNavigator from '../ParentTabNavigator';
import Menu1Screen from './Menu1Screen';
import Menu2Screen from './Menu2Screen';
import colors from '../../../constants/colors';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { navigation } = props;
  const [focused, setFocused] = React.useState(0);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        {...props}
        focused={focused === 0}
        label="Quay lại"
        labelStyle={{ fontFamily: 'Roboto-Bold', marginLeft: -12 }}
        icon={({ color, size }) => <Icon color={color} size={size} name="keyboard-backspace" />}
        onPress={() => {
          console.log(props);
          setFocused(0);
          navigation.navigate('SLL_Parent_TabNavigator');
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        {...props}
        focused={focused === 1}
        label="Menu 1"
        labelStyle={{ fontFamily: 'Roboto-Bold', marginLeft: -12 }}
        icon={({ color, size }) => <Icon color={color} size={size} name="apps" />}
        onPress={() => {
          console.log(props);
          setFocused(1);
          navigation.navigate('SLL_Parent_Drawer_Menu1');
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        {...props}
        focused={focused === 2}
        label="Menu 2"
        labelStyle={{ fontFamily: 'Roboto-Bold', marginLeft: -12 }}
        icon={({ color, size }) => <Icon color={color} size={size} name="apps" />}
        onPress={() => {
          console.log(props);
          setFocused(2);
          navigation.navigate('SLL_Parent_Drawer_Menu2');
          navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContentOptions={{ activeTintColor: colors.WHITE, inactiveTintColor: colors.PRIMARY_FONT, activeBackgroundColor: colors.SLL_PRIMARY }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="SLL_Parent_TabNavigator" component={ParentTabNavigator} />
      <Drawer.Screen name="SLL_Parent_Drawer_Menu1" component={Menu1Screen} />
      <Drawer.Screen name="SLL_Parent_Drawer_Menu2" component={Menu2Screen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
