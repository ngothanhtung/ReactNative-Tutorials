import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text>Product Screen</Text>
      </SafeAreaView>
    )
  }
}
