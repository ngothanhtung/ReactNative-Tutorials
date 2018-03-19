import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onPressLogin = () => {
    var username = this.state.username;
    var password = this.state.password;
    if (username === 'admin' && password === '123456789') {
      alert("Login OK");
    } else {
      alert("Login Failed");
    }
      
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder=""
          onChangeText={(text) => this.setState({ username: text })}
        />

        <TextInput
        secureTextEntry={true}
        style={{ height: 40 }}
        placeholder=""
        onChangeText={(text) => this.setState({ password: text })}
      />
        <Button title="Contact Us" onPress={this.onPressLogin} />

      </View>
    );
  }
}

export default LoginScreen;