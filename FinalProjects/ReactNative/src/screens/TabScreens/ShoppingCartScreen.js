import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import ShoppingCart from '../../modules/shopModule/components/ShoppingCart';

export default class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ShoppingCart />
      </SafeAreaView>
    );
  }
}
