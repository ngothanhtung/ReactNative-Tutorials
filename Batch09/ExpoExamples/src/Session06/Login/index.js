/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity, TextInput, StatusBar, ActivityIndicator } from 'react-native';

const PRIMARY_COLOR = '#3466FE';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    flexDirection: 'row',
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
        }}
      >
        <Text style={[styles.text, { fontSize: 48, fontWeight: '700' }]}>Hello</Text>
        <View style={{ height: 16 }} />
        <Text style={[styles.text, { fontSize: 16 }]}>Sign in to your account</Text>
      </View>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'tungnt@softech.vn',
      password: '123456789',
      loading: false,
    };
  }

  onSignIn = () => {
    // before
    this.setState({ loading: true });
    // fetch
    const url = 'https://training.softech.cloud/api/users/login';
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    // send a request
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ loading: false });
        // console.log(json);
        // json === array
        if (json.length === 0) {
          Alert.alert('Thông báo', 'Đăng nhập không thành công');
        } else {
          Alert.alert('Thông báo', 'Đăng nhập thành công');
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
        Alert.alert('Thông báo', 'Có lỗi xảy ra');
      });
  };

  render() {
    return (
      <React.Fragment>
        <LoginHeader />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <TextInput
                style={{ flex: 1, paddingHorizontal: 12 }}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                placeholder='Email'
                value={this.state.email}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1 }}>
              <TextInput
                secureTextEntry={this.state.secureTextEntry}
                style={{ flex: 1, paddingHorizontal: 12 }}
                placeholder='Password'
                value={this.state.password}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 12, alignItems: 'flex-end' }}>
            <Text style={{ marginRight: 12, color: 'gray' }}>Forgot your password?</Text>
          </View>
        </View>
        <View
          style={{
            height: 120,
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity style={[styles.button, { backgroundColor: PRIMARY_COLOR }]} onPress={this.onSignIn}>
              {this.state.loading && <ActivityIndicator />}
              <Text style={[styles.text, { fontSize: 16, fontWeight: '700', alignSelf: 'center' }]}>SIGN IN</Text>
            </TouchableOpacity>
            <View height={12} />
            <Text>Don't have an account? Create</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default Login;
