import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {    
    console.log(this.props);
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <View>
          <View>
            <TextInput
              placeholder="Username"
              onChangeText={(text) => { this.setState({ username: text }) }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              onChangeText={(text) => { this.setState({ password: text }) }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.login(this.state.username, this.state.password);
                this.props.increaseCount(10);
              }}
              style={{ backgroundColor: '#2d3436', height: 48, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: this.props.color }}>
                Login
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.props.loading &&
          <View>
            <ActivityIndicator />
          </View>
        }
      </View>
    );
  }
}
