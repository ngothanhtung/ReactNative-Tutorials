import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DrawerActions, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

const BarIconMenu = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer());
    }}>
      <View style={{ padding: 6, paddingRight: 12 }}>
        <Icon name="bars" size={26} />
      </View>
    </TouchableOpacity>
  );
}

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Main',
    headerRight: <BarIconMenu navigation={navigation} />
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is main screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerRight: <BarIconMenu navigation={navigation} />
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is profile screen</Text>
      </View>
    );
  }
}

class OrderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Order',
    headerRight: <BarIconMenu navigation={navigation} />
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is order screen</Text>
      </View>
    );
  }
}

// const DrawerNavigatorExamples = createDrawerNavigator({
//   MainScreen: {
//     screen: MainScreen,
//   },
//   ProfileScreen: {
//     screen: ProfileScreen,
//   },
//   OrderScreen: {
//     screen: OrderScreen,
//   },
// });



const DrawerNavigator = createDrawerNavigator(
  {
    MainScreen: {
      screen: createStackNavigator({ screen: MainScreen }),
      navigationOptions: { title: 'Main Screen' }
    },
    ProfileScreen: {
      screen: createStackNavigator({ screen: ProfileScreen }),
      navigationOptions: { title: 'Profile Screen' }
    },
    OrderScreen: {
      screen: createStackNavigator({ screen: OrderScreen }),
      navigationOptions: { title: 'Order Screen' }
    },
  },
  {
    drawerPosition: 'right'
  }
);


const DrawerNavigatorExamples = createSwitchNavigator({
  //Stack: StackNavigator,
  //Tab: TabNavigator,
  Drawer: DrawerNavigator,
});
export default DrawerNavigatorExamples;