/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password is too short').required('Password is required'),
});

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
        <Text style={[styles.text, { fontSize: 48, fontWeight: '700' }]}>Hello</Text>
        <View style={{ height: 16 }} />
        <Text style={[styles.text, { fontSize: 16 }]}>Sign in to your account</Text>
      </View>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={schema}
          validateOnMount={true}
          onSubmit={(values) => {
            axios
              .post('https://training.softech.cloud/api/users/login', values)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(values);
          }}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            // console.log(errors);
            let disabled = Object.keys(errors).length > 0;
            return (
              <React.Fragment>
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        value={values.email}
                        style={{ flex: 1, paddingHorizontal: 12 }}
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                      />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      <Icon name="account" size={24} color={errors.email ? 'red' : '#CCD1DD'} style={{ marginHorizontal: 8 }} />
                    </View>
                  </View>
                  {errors.email && <Text style={{ marginHorizontal: 12, color: 'red' }}>{errors.email}</Text>}
                  <View style={styles.inputContainer}>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        secureTextEntry={this.state.secureTextEntry}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1, paddingHorizontal: 12 }}
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                      />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      <Icon
                        name={this.state.secureTextEntry ? 'eye-off' : 'eye'}
                        size={24}
                        color={errors.password ? 'red' : '#CCD1DD'}
                        style={{ marginHorizontal: 8 }}
                        onPress={() => {
                          let s = !this.state.secureTextEntry;
                          this.setState({ secureTextEntry: s });
                        }}
                      />
                    </View>
                  </View>
                  {errors.password && <Text style={{ marginHorizontal: 12, color: 'red' }}>{errors.password}</Text>}
                  <View style={{ marginTop: 12, alignItems: 'flex-end' }}>
                    <Text style={{ marginRight: 12, color: 'gray' }}>Forgot your password?</Text>
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
                      style={[styles.button, { backgroundColor: disabled ? 'gray' : PRIMARY_COLOR }]}
                      disabled={disabled}
                      onPress={handleSubmit}>
                      <Text style={[styles.text, { fontSize: 16, fontWeight: '700', alignSelf: 'center' }]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View height={12} />
                    <Text>Don't have an account? Create</Text>
                  </View>
                </View>
              </React.Fragment>
            );
          }}
        </Formik>
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
