import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createDrawerNavigator, SafeAreaView, DrawerItems, DrawerActions, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingScreen from './DrawerScreen/SettingScreen';
import LogoutScreen from './DrawerScreen/LogoutScreen';
import TabNavigator from './TabNavigator'

const CustomDrawerContentComponent = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props}
          getLabel={(scene) => {
            if (scene.index === 0) return;
            return (
              <View style={{ flex: 1, paddingHorizontal: 8, height: 48, justifyContent: 'center', borderBottomColor: '#FDA7DF', borderBottomWidth: 1 }}>
                <Text>
                  {props.getLabel(scene)}
                </Text>
              </View>
            );
          }}
          onItemPress={(item) => {
            console.log(item);
            props.navigation.dispatch(DrawerActions.closeDrawer());
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'NewsScreen', params: { key: item.route.routeName } })],

            });
            props.navigation.dispatch(resetAction);

          }}
          contentOptions={{
            activeTintColor: '#ffffff',
            activeBackgroundColor: 'green',
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};


const routeConfigs = {
  TabNavigator: {
    screen: TabNavigator
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SETTING',
    }),
  },
  LogoutScreen: {
    screen: LogoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'LOG OUT',
      drawerLabel: 'Thoat',
      drawerIcon: <Icon name="account" size={20} style={{ color: 'red' }} />
    }),
  }
};
const drawerNavigatorConfig = {
  drawerWidth: 300,
  drawerPosition: 'right', // default 'left',
  drawerBackgroundColor: '#12CBC4',
  drawerType: 'front',
  // contentComponent: CustomDrawerContentComponent,
};

const drawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default drawerNavigator;
