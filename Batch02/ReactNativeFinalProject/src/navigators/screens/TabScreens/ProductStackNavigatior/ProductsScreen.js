import React, { Component } from 'react';
import { View } from 'react-native';
import ProductsContainer from '../../../../modules/ProductModule/containers/ProductsContainer';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ProductsContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

