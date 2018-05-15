import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'MainScreen',
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Screen</Text>
        <Button title="Go to More Screen 1" onPress={() => {

        }} />
      </View>
    );
  }
}
