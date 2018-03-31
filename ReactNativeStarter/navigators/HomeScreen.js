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
          <Text>Home Screen</Text>
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

