import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 24,
          height: 48,
          backgroundColor: this.props.color,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontWeight: '700' }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
