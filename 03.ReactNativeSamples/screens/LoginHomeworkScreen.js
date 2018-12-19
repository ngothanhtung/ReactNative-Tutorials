import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import LogoImageUrl from '../resources/aptech-logo.jpg';

const DUTCH_COLORS = {
  Blue: '#0652DD'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'pink',
  },

  topContainer: {
    flex: 2,
    //backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  middleContainer: {
    flex: 3,
    padding: 24,
    //backgroundColor: 'green',
  },

  bottomContainer: {
    flex: 1,
    //backgroundColor: 'yellow',
    justifyContent: 'flex-end'
  },

  inputContainer: {
    height: 48,
    //backgroundColor: 'orange',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    marginVertical: 6,
  },

  textInput: {
    padding: 12,
    color: '#2d3436',
    //backgroundColor: 'violet',
  },

  buttonContainer: {
    height: 48,
    //backgroundColor: 'red',
    justifyContent: 'center',
    marginVertical: 6,
  },

  button: {
    padding: 12,
    backgroundColor: '#0984e3',
    backgroundColor:'#273c75',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: 'brown',
    padding: 12,
  }
});

export default class LoginHomeworkScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image resizeMode="contain" style={{ width: 240, height: 80 }} source={LogoImageUrl} />
        </View>
        <View style={styles.middleContainer}>
          {/* Email */}
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Enter email"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Enter password"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.footer}>
            <Text>Have a account?</Text>
            <Text>Sign up</Text>
          </View>
        </View>
      </View>
    );
  }
}
