import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <Text> Login Screen </Text>
        <Button title="Register" onPress={() => {
          this.props.navigation.navigate('RegisterScreen', { message: 'Hello from LoginScreen' })
        }} />
        <Button title="Go to Tab" onPress={() => {
          // this.props.navigation.navigate('TabNavigator')
          this.props.navigation.navigate('DrawerNavigator')
        }} />
      </SafeAreaView>
    )
  }
}
