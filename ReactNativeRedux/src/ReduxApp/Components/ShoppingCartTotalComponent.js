import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';



export default class ShoppingCartTotalComponent extends Component {
  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  render() {
    return (
      <TouchableOpacity
        style={{ backgroundColor: '#d63031' }}
        onPress={() => {
          this.props.showShoppingCart();
        }}>
        <View style={{ padding: 6, alignItems: 'flex-end' }}>
          <Text style={{ color: '#ffffff', fontWeight: '700' }}>Total: {this.formatCurrency(this.props.total)} </Text>

          <Text style={{ color: '#ffffff', fontWeight: '700' }}>Count: {this.props.count} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

