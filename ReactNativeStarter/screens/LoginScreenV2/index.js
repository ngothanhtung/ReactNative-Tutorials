import React, { Component } from 'react';
import {
  Alert, StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform,
} from 'react-native';
import COLORS from '../../constants/COLORS';

// BEGIN: CONSTANTS
const WINDOW_WIDTH = Dimensions.get('window').width;

// Get value from CONSTANTS
const WHITE_COLOR = COLORS.White;
const DARK_COLOR = '#45aaf2';

const BACKGROUND_IMAGE = require('../../resources/background-2.jpg');
const LOGO_IMAGE = require('../../resources/react-native-logo.png');
const MAIL_ICON = require('../../resources/mail_icon.png');
const LOCK_ICON = require('../../resources/lock_icon.png');

// END CONSTANTS COMPONENTS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 15,
  },
  inputContainer: {
    width: (WINDOW_WIDTH / 10) * 9,
    height: 50,
    marginVertical: 10,
  },
  subInputContainer: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  inputIcon: {
    width: 24,
    height: 24,
    tintColor: WHITE_COLOR,
    alignSelf: 'center',
    marginBottom: 5,
    marginRight: 12,
  },

  inputBackground: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0,
  },

  inputText: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: COLORS.White,
  },
  footerContainer: {
    flexDirection: 'row',
    width: '80%',
  },
});


const Error = (props) => {
  if (props.isInvalid === true) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'yellow' }}>{props.errorMessage}</Text>
      </View>
    );
  }
  return (
    <View />
  );
};

export default class LoginScreenV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'login',
      username: '',
      password: '',
      invalidEmail: false,
      invalidPassword: false,
    };
  }

  onPressLogin() {
    const { username, password } = this.state;
    // CHECK VALID EMAIL
    if (username.trim().length === 0) {
      this.setState({ invalidEmail: true });
      return;
    }
    this.setState({ invalidEmail: false });


    // CHECK VALID PASSWORD
    if (password.trim().length === 0) {
      this.setState({ invalidPassword: true });
      return;
    }

    this.setState({ invalidPassword: false });
    // CHECK LOGIN
    if (username.toLowerCase() === 'admin' && password === '123456789') {
      Alert.alert('React Native', 'Login OK');
    } else {
      Alert.alert('React Native', 'Login Failed');
    }
  }

  render() {
    if (this.state.viewName === 'create-account') {
      return (
        <View style={{ flex: 1, justifyContent: 'flex-end', alignContent: 'center' }}>
          <Text>
            Create account View
          </Text>
          <Text>
            Create account View
          </Text>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        {/* BACKGROUND */}
        <Image source={BACKGROUND_IMAGE} resizeMode="stretch" style={styles.backgroundImage} />
        {/* LOGIN COMPONENTS */}
        <View style={styles.loginContainer}>
          {/* LOGO IMAGE */}
          <Image source={LOGO_IMAGE} style={styles.logoImage} />
          {/* USERNAME FIELD */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={MAIL_ICON} style={styles.inputIcon} />
              <TextInput
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.inputText}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({
                  username: text,
                  invalidEmail: text.length === 0,
                })}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
            </View>
            <View style={styles.inputBackground} />

            {/* ERROR */}
            <Error isInvalid={this.state.invalidEmail} errorMessage="Please enter email" />

          </View>

          {/* PASSWORD FIELD */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={LOCK_ICON} style={styles.inputIcon} />
              <TextInput
                ref={(input) => { this.passwordInput = input; }}
                secureTextEntry
                autoFocus={false}
                style={styles.inputText}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({
                  password: text,
                  invalidPassword: text.length === 0,
                })}
                onSubmitEditing={() => { this.onPressLogin(); }}
              />
            </View>
            <View style={styles.inputBackground} />
            {/* ERROR */}
            <Error
              isInvalid={this.state.invalidPassword}
              errorMessage="Please enter password"
            />
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={{
              backgroundColor: DARK_COLOR,
              alignItems: 'center',
              padding: 15,
              width: (WINDOW_WIDTH / 10) * 9,
              borderRadius: 12,
              marginVertical: 10,
            }}
            activeOpacity={0.7}
            onPress={this.onPressLogin}
          >
            <Text
              style={{
                fontSize: 16,
                color: WHITE_COLOR,
                fontWeight: 'bold',
              }}
            >Login
            </Text>
          </TouchableOpacity>

          {/* REGISTER AND FORGOT PASSWORD */}
          <View style={styles.footerContainer}>
            <View style={{ width: '35%' }}>
              <TouchableOpacity onPress={() => { this.setState({ viewName: 'create-account' }); }}>
                <Text style={{ color: WHITE_COLOR }}>Create account</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '25%' }} />
            <View style={{ width: '50%' }}>
              <TouchableOpacity>
                <Text style={{ color: WHITE_COLOR }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
