import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text>Products Screen</Text>
        <Button title="Go to details" onPress={() => {
          this.props.navigation.navigate('ProductDetailsScreen', { id: 999 })
        }} />
      </SafeAreaView>
    )
  }
}
