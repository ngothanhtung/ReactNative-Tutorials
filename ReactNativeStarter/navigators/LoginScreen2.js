import React, { Component } from 'react';
import {
  Alert, View, Text, Button, Icon, TextInput, Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './styles';

export default class LoginScreen2 extends Component {
  static navigationOptions = {
    title: 'Login',
    headerBackTitle: ''
  }

  constructor(props) {
    super(props);

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
            <View style={styles.disabledTextInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Business email"}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'email-address'}
                value={this.props.navigation.state.params.email}
                editable={false}
              />
            </View>
            <View style={{ height: 30 }}></View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Password"}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'email-address'}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.link}>
                Forgotten your password?
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { Alert.alert('Coming soon') }}>
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
