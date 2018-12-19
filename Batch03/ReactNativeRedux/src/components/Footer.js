import React, { Component } from 'react'
import { View } from 'react-native'
import TotalLabel from './TotalLabel';

export default class Footer extends Component {
  render() {
    return (
      <View style={{ padding: 12, backgroundColor: 'green' }}>
        <TotalLabel value={this.props.totalText} />
      </View>

    )
  }
}
