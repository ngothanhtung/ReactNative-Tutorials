import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {};

// url : https://server.aptech.io/auth/login
// method: POST
// body: { "username": "tungnt@softech.vn", "password": "123456789" }

const LoginNetworking = (props: Props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    fetch('https://server.aptech.io/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        console.log('🔥', response.ok);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Đăng nhập không thành công');
        }
      })
      .then((json) => {
        console.log(json);
        Alert.alert('Thông báo', 'Đăng nhập thành công');
      })
      .catch((error) => {
        // console.error(error);
        Alert.alert('Thông báo', error.toString());
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginNetworking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },

  inputContainer: {
    // backgroundColor: 'yellow',
  },

  label: {
    fontWeight: '700',
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },

  button: {
    height: 54,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});
