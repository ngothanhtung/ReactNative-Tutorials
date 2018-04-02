import React, { Component } from 'react';
import {
  Alert, View, Text, Button, Icon, TextInput, Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './styles';

export default class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
    headerBackTitle: null
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
              We will send an email to {this.props.navigation.state.params.email}
            </Text>
            <Text style={styles.title}>
              Enter the code below. Change email.
            </Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.disabledTextInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Business email"}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'email-address'}
                editable={false}
                value={this.props.navigation.state.params.email}
              />
            </View>
            <View style={{ height: 30 }}></View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Password"}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'default'}
              />
            </View>
            <View style={{ height: 30 }}></View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput} placeholder={"Re-enter Password"}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={'default'}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { Alert.alert('Coming soon') }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
