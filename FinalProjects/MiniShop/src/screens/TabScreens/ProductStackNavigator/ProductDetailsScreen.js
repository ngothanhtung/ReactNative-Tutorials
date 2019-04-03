import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import ProductDetails from '../../../modules/shopModule/components/ProductDetails';

export default class ProductDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ProductDetails />
      </SafeAreaView>
    );
  }
}
