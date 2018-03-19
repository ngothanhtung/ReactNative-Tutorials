import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: 240,
    height: 48,
  }
});

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
      <View style={styles.container}>
        <Text>
          Username:
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder=""
          onChangeText={(text) => this.setState({ username: text })}
        />
        <Text>
          Password:
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder=""
          onChangeText={(text) => this.setState({ password: text })}
        />
        <View style={{ paddingTop: 24}}>
          <Button title="Login" onPress={this.onPressLogin} />
        </View>
      </View>
    );
  }
}

export default LoginScreen;