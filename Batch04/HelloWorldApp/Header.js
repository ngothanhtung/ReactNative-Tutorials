import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={{
        height: 60,
        backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.subtitle}</Text>
      </View>
    )
  }
}
