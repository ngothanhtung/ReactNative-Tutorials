import React, { Component } from 'react';
import { View } from 'react-native';
import ProductContainer from '../../../../modules/ProductModule/containers/ProductContainer';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ProductContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

