import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class FlexLayout extends Component {
  render() {
    return (

      <SafeAreaView style={{
        backgroundColor: 'red',
        flex: 1

      }}>
        <View style={{
          flex: 1, backgroundColor: 'orange',
          justifyContent: "center",
          alignItems: "flex-start"
        }}>
          <View style={{ width: 150, height: 150, backgroundColor: 'powderblue' }} />
          <View style={{ width: 150, height: 150, backgroundColor: 'skyblue' }} />
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        </View>

      </SafeAreaView>
    )
  }
}
