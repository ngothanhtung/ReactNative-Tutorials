import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from '../../../constants/colors';

export default class ShoppingCartTotalComponent extends Component {
  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  render() {
    return (
      <View>
        <View style={{ margin: 8, padding: 6, alignItems: 'flex-end' }}>
          <Text style={{ color: colors.purpleColor, fontWeight: '700' }}>Total: {this.formatCurrency(this.props.total)} </Text>
        </View>
      </View>
    );
  }
}

