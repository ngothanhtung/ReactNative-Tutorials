/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Login() {
  const [loading, setLoading] = React.useState(false);

  const [email, setEmail] = React.useState('tungnt@softech.vn');
  const [password, setPassword] = React.useState('123456789');

  // FETCH
  const signIn = () => {
    // before
    setLoading(true);
    // fetch
    const url = 'https://training.softech.cloud/api/users/login';
    const data = {
      email: email,
      password: password,
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
        setLoading(false);
        // json === array
        if (json.ok) {
          Alert.alert('Thông báo', 'Đăng nhập thành công');
        } else {
          Alert.alert('Thông báo', 'Đăng nhập không thành công');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Alert.alert('Thông báo', 'Có lỗi xảy ra');
      });
  };

  // AXIOS
  const signInWithAxios = () => {
    // before
    setLoading(true);
    // fetch
    const url = 'https://training.softech.cloud/api/users/login';
    const data = {
      email: email,
      password: password,
    };

    // send a request
    axios
      .post(url, data)
      .then((response) => {
        setLoading(false);
        // json === array
        if (response.data.ok) {
          Alert.alert('Thông báo', 'Đăng nhập thành công');
        } else {
          Alert.alert('Thông báo', 'Đăng nhập không thành công');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Alert.alert('Thông báo', 'Có lỗi xảy ra');
      });
  };

  return (
    <View style={styles.container}>
      {/* EMAIL */}
      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ flex: 1, paddingHorizontal: 12 }}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            placeholder='Email'
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>
      </View>

      {/* PASSWORD */}
      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <TextInput
            secureTextEntry={true}
            style={{ flex: 1, paddingHorizontal: 12 }}
            placeholder='Password'
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
      </View>

      {/* BUTTON */}
      <View>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          {loading ? <ActivityIndicator color='white' style={{ marginRight: 8 }} /> : <Text style={styles.buttonText}>SIGN IN (fetch)</Text>}
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          {loading ? <ActivityIndicator color='white' style={{ marginRight: 8 }} /> : <Text style={styles.buttonText}>SIGN IN (axios)</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const PRIMARY_COLOR = '#3466FE';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
  },

  button: {
    flexDirection: 'row',
    marginTop: 24,
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F0F0F5',
    height: 60,
    backgroundColor: '#F7F9FC',
    marginTop: 24,
  },
});
