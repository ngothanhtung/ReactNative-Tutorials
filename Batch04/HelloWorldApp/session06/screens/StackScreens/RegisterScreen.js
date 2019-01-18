import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
        <Text> Register Screen </Text>
        <Text>
          {
            // this.props.navigation.state.params.message
            this.props.navigation.getParam('message', 'default text')
          }
        </Text>
      </SafeAreaView>
    )
  }
}
