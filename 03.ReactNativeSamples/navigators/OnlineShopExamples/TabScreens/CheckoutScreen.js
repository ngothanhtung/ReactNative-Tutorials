import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class CheckoutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
        <Text> CheckoutScreen </Text>
        <Button title="Go to DrawerNavigator" onPress={() => {
          this.props.navigation.navigate('Drawer');
        }} />
      </View>
    );
  }
}
