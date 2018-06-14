import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerActions } from 'react-navigation';

export default class CheckoutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
        <Text> CheckoutScreen </Text>
        <Button title="Go to DrawerNavigator" onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }} />
      </View>
    );
  }
}
