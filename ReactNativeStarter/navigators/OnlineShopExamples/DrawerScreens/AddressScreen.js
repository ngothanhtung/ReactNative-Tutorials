import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AddressScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'violet' }}>
        <Text> AddressScreen </Text>

        <Button title="Go to PaymentScreen" onPress={() => {
          this.props.navigation.navigate('PaymentScreen');
        }} />
      </View>
    );
  }
}
