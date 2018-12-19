import React, { Component } from 'react';
import {
  Alert, View, Text, TextInput,
  Platform,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';

export default class LoginScreen1 extends Component {
  static navigationOptions = {
    header: null,
    title: 'Login',
    headerBackTitle: null, // iOS
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@gmail.com',
    };
  }

  onPressNextButton() {
    if (this.state.email === 'admin@gmail.com') {
      this.props.navigation.navigate('Login2', { email: this.state.email });
    }
    else {
      Alert.alert('Error', 'Your email is not exists!');
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
                underlineColorAndroid="#ffffff"
                style={styles.textInput}
                placeholder={Platform.OS === 'ios' ? 'Business email' : 'Enter business email'}
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                onSubmitEditing={() => { this.onPressNextButton(); }}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.onPressNextButton(); }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {Platform.OS === 'ios' ? 'Next' : 'CONTINUE'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
