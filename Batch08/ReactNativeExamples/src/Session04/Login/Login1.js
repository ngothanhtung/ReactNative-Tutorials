/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PRIMARY_COLOR = '#3466FE';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    height: 48,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },

  formContainer: {
    flex: 1,
    // backgroundColor: '',
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F0F0F5',
    height: 60,
    backgroundColor: '#F7F9FC',
    // backgroundColor: 'red',
    marginTop: 24,
    marginHorizontal: 12,
  },
});

class LoginHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: 240,
          backgroundColor: PRIMARY_COLOR,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.text, { fontSize: 48, fontWeight: '700' }]}>
          Hello
        </Text>
        <View style={{ height: 16 }} />
        <Text style={[styles.text, { fontSize: 16 }]}>
          Sign in to your account
        </Text>
      </View>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      secureTextEntry: true,
    };
  }

  render() {
    let disabled = !(
      this.state.username.length > 0 && this.state.password.length > 0
    );

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={{ flex: 1, paddingHorizontal: 12 }}
                placeholder="User Name"
                onChangeText={(text) => {
                  this.setState({ username: text });
                }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Icon
                name="account"
                size={24}
                color="#CCD1DD"
                style={{ marginHorizontal: 8 }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <TextInput
                secureTextEntry={this.state.secureTextEntry}
                style={{ flex: 1, paddingHorizontal: 12 }}
                placeholder="Password"
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Icon
                name={this.state.secureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color={this.state.secureTextEntry ? '#CCD1DD' : 'black'}
                style={{ marginHorizontal: 8 }}
                onPress={() => {
                  let s = !this.state.secureTextEntry;
                  this.setState({ secureTextEntry: s });
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 12, alignItems: 'flex-end' }}>
            <Text style={{ marginRight: 12, color: 'gray' }}>
              Forgot your password?
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 120,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              marginHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: disabled ? 'gray' : PRIMARY_COLOR },
              ]}
              disabled={disabled}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 16, fontWeight: '700', alignSelf: 'center' },
                ]}>
                SIGN IN
              </Text>
            </TouchableOpacity>
            <View height={12} />
            <Text>Don't have an account? Create</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#cddc39' }}>
        <LoginHeader />
        <LoginForm />
      </View>
    );
  }
}
