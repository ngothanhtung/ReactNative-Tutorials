import React, { Component } from 'react';
import {
  View, Text, Button,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '@workplace',
    headerBackTitle: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.logoText}>@workplace</Text>
          
          <View style={{ height: 8 }}></View>

          <Text style={styles.header}>Enter your password</Text>
          
          <View style={{ height: 8 }}></View>
          
          <Text style={styles.title}>Log in using your Workplace password</Text>
        </View>
        <View style={styles.middleContainer}>

        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('CreateAccount') }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Login1') }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

