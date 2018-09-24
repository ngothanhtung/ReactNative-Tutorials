import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class VioletButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.KichChuot();
        }}
        style={{
          margin: 6,
          height: 48,
          borderRadius: 24,
          paddingHorizontal: 12,
          backgroundColor: '#6c5ce7',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}