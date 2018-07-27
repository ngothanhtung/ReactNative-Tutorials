import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Text>
          Product Details
        </Text>
        {/* <Text>Product Detail: {this.props.navigation.state.params.product._id}</Text> */}
      </View>
    );
  }
}

