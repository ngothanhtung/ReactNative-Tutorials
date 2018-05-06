import React, { Component } from 'react';
import {
  Alert, View, Text, TextInput,
  Platform,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import axios from 'axios';

import styles from './styles';
import SETTINGS from '../constants/SETTINGS';

export default class LoginScreen1 extends Component {
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: { alignSelf: 'center' },
    headerRight: (<View />),
    headerBackTitle: null, // iOS
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onPressNextButton = () => {
    // AXIOS: EMAIL EXISTS?
    axios.get(`${SETTINGS.ExpressApiUrl}/user/get/${this.state.email}`)
      .then((response) => {
        if (response.data.result.length > 0) {
          // GO TO LOGIN 2
          this.props.navigation.navigate('Login2', { email: this.state.email });
        } else {
          Alert.alert('Error', 'Email does not exists');
        }
      })
      .catch((error) => {
        Alert.alert(`Error: ${error}`);
      });
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
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={this.onPressNextButton}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressNextButton}>
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
