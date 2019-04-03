import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import Products from '../../../modules/shopModule/components/Products';

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Products />
      </SafeAreaView>
    );
  }
}
