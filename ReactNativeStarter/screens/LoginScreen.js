import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Dimensions } from 'react-native';

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  inputText: {
    width: width - 60,
    height: 48,

  },
  headerText: {
    fontSize: 24,
    color: '#2c3e50',
    marginBottom: 12
  },
  hr: {
    borderBottomColor: '#57606f',
    borderBottomWidth: 1,
    width: width - 60,
    marginBottom: 24
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
        <Text style={styles.headerText}>
          LOGIN SCREEN
      </Text>
      <View style={styles.hr}>
      
      </View>

        <TextInput
          style={styles.inputText}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Enter your password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <View style={{ paddingTop: 24 }}>
          <Button title="Login" onPress={this.onPressLogin} />
        </View>
      </View>
    );
  }
}

export default LoginScreen;