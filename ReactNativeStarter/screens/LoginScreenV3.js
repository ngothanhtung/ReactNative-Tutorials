import React, { Component } from 'react';
import {
  View, Text, TextInput, Button, Image, ImageBackground,
  StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';

var { width, height } = Dimensions.get('window');

const BACKGROUND_IMAGE = require('../resources/background-2.jpg');
const LOGO_IMAGE = require('../resources/react-native-logo.png');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  footerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 40
  },

  inputText: {
    width: width - 60,
    height: 48,
    backgroundColor: '#f1f2f6',
    color: '#0c2461',
    padding: 12,
    marginBottom: 8,
  },
  buttonContainer: {
    backgroundColor: '#0c2461',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },

  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 15
  },

  loginButton: {
    backgroundColor: '#0c2461',
    color: '#fff',
    width: 240
  },
  signUpText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    alignSelf: 'center'
  }
});

class LoginScreenV3 extends Component {
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
      <ImageBackground style={{ flex: 1, position: 'relative' }} source={BACKGROUND_IMAGE}>
        <View style={styles.container}>
          <Image source={LOGO_IMAGE} style={styles.logoImage} />
          <View style={{ height: 32 }}></View>
          <View>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your email"
              placeholderTextColor="#6a89cc"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              underlineColorAndroid={"transparent"}
              onChangeText={(text) => this.setState({ username: text })}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
              ref={(input) => this.passwordInput = input}
              secureTextEntry={true}
              style={styles.inputText}
              placeholder="Enter your password"
              placeholderTextColor="#6a89cc"
              returnKeyType="go"
              underlineColorAndroid={"transparent"}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <View>
              {/*
              <Button title="Login" onPress={this.onPressLogin} />
            */}
              <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={{ color: '#ffffff' }}>Have an account? </Text>
            <TouchableOpacity onPress={() => { alert("This feature is coming soon (Next chapter)") }}>
              <Text style={{ color: '#ffffff' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreenV3;