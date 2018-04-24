import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}>
          <View style={{ padding: 12 }}>
            <Text style={styles.headerText}>
              STUDENT LOGIN
            </Text>
            <View style={{ borderColor: '#2d3436', borderBottomWidth: 2, marginTop: 12, marginBottom: 24 }} />
            <View style={{ height: 12 }} />
            <TextInput
              style={styles.textIput}
              placeholder={"Enter email"}
              placeholderTextColor={"#636e72"}
            />
            <View style={{ height: 12 }} />
            <TextInput
              style={styles.textIput}
              placeholder={"Enter password"}
              placeholderTextColor={"#636e72"}
            />
            <View style={{ height: 12 }} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ backgroundColor: 'pink', alignItems: 'center', paddingBottom: 16 }}>
            <Text>Have an account? Sign up</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  middleContainer: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },

  textIput: {
    height: 48,
    backgroundColor: '#dfe6e9',
    paddingLeft: 12
  },

  button: {
    backgroundColor: '#2d3436',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  headerText: {
    fontSize: 32,
    color: '#2d3436'
  }
};