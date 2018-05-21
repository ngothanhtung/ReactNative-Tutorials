import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class ProductScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
        <Text> ProductScreen </Text>
      </View>
    );
  }
}
