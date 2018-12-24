import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class TotalText extends Component {
  constructor(props) {
    super(props);
    // CODE HERE...
    this.state = {
      quantity: props.quantity
    }
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 40 }}>Price: {this.props.price}</Text>
        <Button title="+" onPress={() => {
          // CODE HERE
          var quantity = this.state.quantity;
          quantity++;
          this.setState({ quantity: quantity });
        }} />
        <Text style={{ fontSize: 40 }}>Quantity: {this.state.quantity}</Text>
        <Button title="-" onPress={() => {
          // CODE HERE
          var quantity = this.state.quantity;
          quantity--;
          this.setState({ quantity: quantity });
        }} />
        <Text style={{ fontSize: 40 }}>Discount: {this.props.discount}</Text>
        <Text style={{ fontSize: 40 }}>Total: {this.props.price * this.state.quantity * (100 - this.props.discount) / 100}</Text>
      </View>
    )
  }
}
