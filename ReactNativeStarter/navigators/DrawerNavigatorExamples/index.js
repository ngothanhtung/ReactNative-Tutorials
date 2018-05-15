import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from './MainScreen';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
        <View style={{ padding: 6 }}>
          <Icon size={26} name="bars" />
        </View>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>This is profile screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Order')}
          title="Go to Order"
        />
      </View>

    );
  }
}

class OrderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Order',
    headerLeft: (
      <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
        <View style={{ padding: 6 }}>
          <Icon size={26} name="bars" />
        </View>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Button
          onPress={() => this.props.navigation.navigate('Profile')}
          title="Go back"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const StackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen: StackNavigator,
  },
  Profile: {
    screen: createStackNavigator({ Profile: ProfileScreen }),
  },
  Order: {
    screen: createStackNavigator({ Order: OrderScreen }),
  },
});


const DrawerNavigatorExamples = createSwitchNavigator({
  //Stack: StackNavigator,
  Drawer: DrawerNavigator,
});

export default DrawerNavigatorExamples;