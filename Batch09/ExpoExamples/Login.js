import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#bdc3c7',
    flex: 2,
  },

  logo: {
    height: 160,
    width: 160,
    backgroundColor: 'white',
    borderRadius: 80,
  },

  inputContainer: {
    backgroundColor: '#bdc3c7',
    flex: 3,
    padding: 16,
  },

  emailContainer: {
    height: 60,
    // backgroundColor: 'green',
    marginTop: 12,
    flexDirection: 'row',
  },

  passwordContainer: {
    height: 60,
    // backgroundColor: 'green',
    marginTop: 12,
    flexDirection: 'row',
  },

  icon: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 60,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  forgotPasswordContainer: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#2980b9',
  },

  footerContainer: {
    backgroundColor: '#bdc3c7',
    // flex: 1,
    height: 120,
    padding: 16,
  },

  loginButton: {
    height: 54,
    borderRadius: 8,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },

  loginFacebookButton: {
    flexDirection: 'row',
    height: 54,
    borderRadius: 8,
    backgroundColor: '#0064C0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpContainer: {
    marginTop: 12,
    alignItems: 'center',
  },
  signUpText: {
    color: '#2980b9',
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
        </View>

        {/* INPUT */}
        <View style={styles.inputContainer}>
          <View style={styles.emailContainer}>
            <View style={styles.icon}>
              <Icon name='email-outline' size={32} color='#7f8c8d' />
            </View>
            <View style={styles.input}>
              <Text>Enter your email</Text>
            </View>
          </View>
          <View style={styles.passwordContainer}>
            <View style={styles.icon}>
              <Icon name='lock-outline' size={32} color='#7f8c8d' />
            </View>
            <View style={styles.input}>
              <Text>Enter your password</Text>
            </View>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </View>

          {/* <View style={styles.loginFacebookButton}>
            <View>
              <Icon name='facebook' size={24} color='white' />
            </View>
            <View width={8} />
            <View>
              <Text style={styles.loginText}>LOGIN</Text>
            </View>
          </View> */}
        </View>

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Haven't account? Sign up</Text>
          </View>
        </View>
      </View>
    );
  }
}
