import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class PaymentScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text> PaymentScreen </Text>
        <Button title="Go back" onPress={() => {
          this.props.navigation.navigate('Tab');
        }} />
      </View>
    );
  }
}
