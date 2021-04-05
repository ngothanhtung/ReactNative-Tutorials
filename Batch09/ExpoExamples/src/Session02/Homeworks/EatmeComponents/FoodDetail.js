import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Quantity from './Quantity';
import Sizes from './Sizes';

const sizes = ['12"', '14"', '16"'];

export default class FoodDetail extends Component {
  state = {
    size: null,
    quantity: 1,
  };

  render() {
    return (
      <View>
        <Quantity
          onPress={(value) => {
            this.setState({ quantity: value });
          }}
        />
        <Sizes
          sizes={sizes}
          onPress={(value) => {
            this.setState({ size: sizes[value] });
          }}
        />
        <Button
          title='Buy Now'
          onPress={() => {
            console.log(this.state);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
