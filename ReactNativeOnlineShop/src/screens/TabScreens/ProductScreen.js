import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductContainer from '../../containers/ProductContainer';

export default class ProductScreen extends Component {
  render() {
    return (
      <View>
        <ProductContainer />
      </View>
    );
  }
}
