import React, { Component } from 'react'
import { Text, View, Button, AsyncStorage } from 'react-native'

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItems: []
    }
  }
  componentWillMount() {
    AsyncStorage.getItem('shopping-cart').then((data) => {
      if (data) {
        this.setState({ shoppingCartItems: JSON.parse(data) });
        console.log(this.state.shoppingCartItems);
      }
    })
  }
  render() {
    return (
      <View>
        <Button title="Clear" onPress={() => {
          AsyncStorage.removeItem('shopping-cart');
        }} />

      </View>
    )
  }
}