import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import { connect } from 'react-redux';

export default class ShoppingCartTotalComponent extends Component {
  render() {
    return (
      <View style={{ padding: 4 }}>
        <Text style={{ color: 'red', fontWeight: '700' }}>Total: ${this.props.total} </Text>
      </View>
    );
  }
}
