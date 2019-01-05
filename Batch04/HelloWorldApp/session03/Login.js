import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props);
    // CODE HERE
    this.state = {
      screenName: 'login',
      fullname: '',
      email: 'tungnt@softech.vn',
      password: '123456789'
    }
  }
  render() {
    return (
      <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
        {/* CONDITIONAL REDERING */}

        {
          (this.state.screenName === 'register') &&
          <View>
            <Text> Full Name </Text>
            <TextInput
              value={this.state.fullname}
              placeholder="Enter your fullname"
              keyboardType='default'
              underlineColorAndroid="#0984e3"
              returnKeyType="next"
              onChangeText={(text) => {
                this.setState({ email: text });
              }} />
          </View>
        }

        <Text> Email </Text>
        <TextInput
          value={this.state.email}
          placeholder="Enter your email"
          keyboardType='default'
          underlineColorAndroid="#0984e3"
          returnKeyType="next"
          onChangeText={(text) => {
            this.setState({ email: text });
          }} />

        <Text> Paswword: </Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          placeholder="Enter your password"
          underlineColorAndroid="#0984e3"
          onChangeText={(text) => {
            this.setState({ password: text });
          }} />
        {
          this.state.screenName === 'register' &&
          <View>
            <Text> Re-enter Paswword: </Text>
            <TextInput
              secureTextEntry={true}
              value={this.state.password}
              placeholder="Re-enter your password"
              underlineColorAndroid="#0984e3"
              onChangeText={(text) => {
                this.setState({ password: text });
              }} />
          </View>
        }
        {
          this.state.screenName === 'login' &&
          <View>
            <View style={{ height: 12 }}></View>
            <Button title="LOGIN" onPress={() => {

            }} />
          </View>
        }

        <View style={{ height: 12 }}></View>
        <Button title="REGISTER" onPress={() => {
          this.setState({ screenName: 'register' })
        }} />
        {
          this.state.screenName === 'register' &&
          < View >
            <View style={{ height: 12 }}></View>
            <Button title="BACK" onPress={() => {
              this.setState({ screenName: 'login' })
            }} />
          </View>
        }

      </View>
    )
  }
}
