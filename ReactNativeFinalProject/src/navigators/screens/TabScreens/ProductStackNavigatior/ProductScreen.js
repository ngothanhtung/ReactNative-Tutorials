import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import ProductContainer from '../../../../modules/ProductModule/containers/ProductContainer';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet' }}>
        {/* <ProductContainer navigation={this.props.navigation} /> */}
        <Text>Product Screen</Text>
        <Button
          title="Go to details"
          onPress={() => {
            this.props.navigation.navigate('ProductDetailScreen');
          }}
        />
      </View>
    );
  }
}

