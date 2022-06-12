import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Quantity from './Quantity';
import Sizes from './Sizes';
import BuyNowButton from './BuyNowButton';

const sizes = [
  {
    name: '12"',
    price: 12.99,
  },
  {
    name: '14"',
    price: 15.99,
  },
  {
    name: '16"',
    price: 19.99,
  },
  {
    name: '18"',
    price: 24.99,
  },
];

export default class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      quantity: 1,
    };
  }

  updateQuantity = (value) => {
    this.setState({ quantity: value });
  };

  updateSize = (value) => {
    this.setState({ size: value });
  };

  render() {
    return (
      <View>
        <Quantity onPress={this.updateQuantity} />
        <Sizes sizes={sizes} onPress={this.updateSize} />
        <BuyNowButton total={this.state.size ? this.state.quantity * this.state.size.price : 0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
