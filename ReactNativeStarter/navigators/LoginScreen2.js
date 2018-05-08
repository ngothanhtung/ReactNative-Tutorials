import React, { Component } from 'react';
import {
  Alert, View, Text, Button, Icon, TextInput, Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import SETTINGS from '../constants/SETTINGS';
import axios from 'axios';
import styles from './styles';

export default class LoginScreen2 extends Component {
  static navigationOptions = {
    header: null,
    title: 'Login',
    headerBackTitle: null
  }

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.email,
      password: ''
    };
  }

  onPressLoginButton = () => {
    // CHECK: EMAIL EXISTS?              
    /*
    axios.post(SETTINGS.ExpressApiUrl + '/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.result.length > 0) {
          // GO TO DRAWER
          this.props.navigation.navigate('Drawer')
        } else {
          alert('Password may be wrong');
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
        console.log(error);
      });
    */
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.header}>
              Enter your password
            </Text>
            <View style={{ height: 8 }}></View>
            <Text style={styles.title}>
              Log in using your Workplace password
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.textInput} placeholder={"Business email"}
                autoCapitalize='none'
                autoCorrect={false}
                editable={false}
                keyboardType={'email-address'}
                value={this.props.navigation.state.params.email}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
            </View>
            <View style={{ height: 30 }}></View>
            <View style={styles.textInputContainer}>
              <TextInput
                ref={component => this.passwordInput = component}
                underlineColorAndroid="transparent"
                style={styles.textInput} placeholder={"Password"}
                autoFocus={true}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'default'}
                onChangeText={(text) => { this.setState({ password: text }) }}
                onSubmitEditing={this.onPressLoginButton}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.link}>
                Forgotten your password?
              </Text>
            </View>
            <View style={{ height: 8 }}>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressLoginButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
