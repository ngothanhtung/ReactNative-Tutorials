import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <Text> Setting Screen </Text>
      </SafeAreaView>
    )
  }
}
