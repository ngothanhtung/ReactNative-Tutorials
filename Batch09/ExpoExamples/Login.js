import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
  },

  logo: {
    height: 160,
    width: 160,
    backgroundColor: 'white',
  },

  inputContainer: {
    backgroundColor: 'pink',
    flex: 2,
  },

  emailContainer: {
    height: 60,
    backgroundColor: 'green',
    marginTop: 12,
    flexDirection: 'row',
  },

  passwordContainer: {
    height: 60,
    backgroundColor: 'green',
    marginTop: 12,
    flexDirection: 'row',
  },

  icon: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
  },

  input: {
    height: 60,
    flex: 1,
    backgroundColor: 'gray',
  },

  footerContainer: {
    backgroundColor: 'violet',
    // flex: 1,
    height: 120,
  },

  loginButton: {
    height: 54,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}></View>
        </View>

        {/* INPUT */}
        <View style={styles.inputContainer}>
          <View style={styles.emailContainer}>
            <View style={styles.icon}></View>
            <View style={styles.input}></View>
          </View>
          <View style={styles.passwordContainer}>
            <View style={styles.icon}></View>
            <View style={styles.input}></View>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </View>
      </View>
    );
  }
}
