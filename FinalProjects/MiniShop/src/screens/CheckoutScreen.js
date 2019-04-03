import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CheckOut from '../modules/shopModule/components/CheckOut';

export default class CheckoutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CheckOut />
      </View>
    );
  }
}
