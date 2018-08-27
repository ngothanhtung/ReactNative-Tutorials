import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MoneyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity
    };
  }

  render() {
    return (
      <View>
        <Text>
          Price: {this.props.price}
        </Text>
        <Text>
          Quantity: {this.state.quantity}
        </Text>
        <Text>
          Discount: {this.props.discount}%
        </Text>
        <Text>
          Total: ${
            this.props.price * this.state.quantity * (100 - this.props.discount) / 100
          }
        </Text>
        <Button title="-" onPress={() => {
          var quantity = this.state.quantity;
          quantity = quantity - 1;
          this.setState({ quantity: quantity });
        }} />
        <Button title="+" onPress={() => {
          var quantity = this.state.quantity;
          quantity = quantity + 1;
          this.setState({ quantity: quantity });
        }} />
      </View>
    );
  }
}
