import React, { Component } from 'react';
import {
  View, Text, Button, Icon, TextInput, Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';

export default class LoginScreen1 extends Component {
  static navigationOptions = {
    title: 'Login',
    headerBackTitle: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.header}>
              Enter your business email
          </Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Business email"}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'email-address'}
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Login2', { email: this.state.email }) }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
