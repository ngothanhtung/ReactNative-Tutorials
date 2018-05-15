import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DrawerActions, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Main',
    title: 'Main',
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
        //this.props.navigation.openDrawer();
      }}>
        <View style={{ padding: 6 }}>
          <Icon name="bars" size={26} />
        </View>
      </TouchableOpacity>
    )
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
    drawerLabel: 'Profile',
    title: 'Profile',
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
        <View style={{ padding: 6 }}>
          <Icon name="bars" size={26} />
        </View>
      </TouchableOpacity>
    )
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
    drawerLabel: 'Order',
    title: 'Order',
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
        <View style={{ padding: 6 }}>
          <Icon name="bars" size={26} />
        </View>
      </TouchableOpacity>
    )
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



const DrawerNavigator = createDrawerNavigator({
  MainScreen: {
    screen: createStackNavigator({ screen: MainScreen }),
  },
  ProfileScreen: {
    screen: createStackNavigator({ screen: ProfileScreen }),
  },
  OrderScreen: {
    screen: createStackNavigator({ screen: OrderScreen }),
  },
});


const DrawerNavigatorExamples = createSwitchNavigator({
  //Stack: StackNavigator,
  //Tab: TabNavigator,
  Drawer: DrawerNavigator,
});
export default DrawerNavigatorExamples;