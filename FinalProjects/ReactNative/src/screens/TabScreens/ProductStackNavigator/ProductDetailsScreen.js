import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class ProductDetailsScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'violet' }}>
        <Text>Product Details Screen</Text>
        <Button title="Go to products" onPress={() => {
          this.props.navigation.navigate('ProductsScreen', { id: 999 })
        }} />
      </SafeAreaView>
    )
  }
}
