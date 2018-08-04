import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProductDetailsContainer from '../../../../modules/ProductModule/containers/ProductDetailsContainer';

export default class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ProductDetailsContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

