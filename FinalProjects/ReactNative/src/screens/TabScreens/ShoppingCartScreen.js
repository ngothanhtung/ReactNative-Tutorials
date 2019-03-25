import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text>Shopping Cart Screen</Text>
      </SafeAreaView>
    )
  }
}
