import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductContainer from '../../../../modules/ProductModule/containers/ProductContainer';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ProductContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

