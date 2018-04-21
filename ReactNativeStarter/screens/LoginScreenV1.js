import React, { Component } from 'react';
import {
  View, Text, TextInput, Button, Image,
  StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';

var { width, height } = Dimensions.get('window');

const AptechLogo = () => (
  <Image source={require('../resources/aptech-logo.jpg')} resizeMode={'contain'} style={styles.logo} />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
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
  loginButton: {
    backgroundColor: '#0c2461',
    color: '#fff',
    width: 240
  },
  signUpText: {
    color: '#0c2461',
    textDecorationLine: 'underline',
    alignSelf: 'center'
  },
  headerText: {
    fontSize: 24,
    color: '#0c2461',
    marginBottom: 12
  },
  hr: {
    borderBottomColor: '#0c2461',
    borderBottomWidth: 1,
    width: width - 60,
    marginBottom: 24
  },

  logo: {
    width: 240,
    height: 175,
    alignSelf: 'center'
  },
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
        <AptechLogo />
        <View>
          <Text style={styles.headerText}>
            STUDENT LOGIN
        </Text>
          <View style={styles.hr}>
          </View>
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
          <Text>Have an account? </Text>
          <TouchableOpacity onPress={() => { alert("This feature is coming soon (Next chapter)") }}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>


        </View>
      </View>
    );
  }
}

export default LoginScreen;