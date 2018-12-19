import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: 'login'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.screenName === 'login' &&
          <LoginScreen onChangeScreenPress={() => {
            this.setState({ screenName: 'register' })
          }} />
        }

        {
          this.state.screenName === 'register' &&
          <RegisterScreen onChangeScreenPress={() => {
            this.setState({ screenName: 'login' })
          }} />
        }

      </View>
    );
  }
}
