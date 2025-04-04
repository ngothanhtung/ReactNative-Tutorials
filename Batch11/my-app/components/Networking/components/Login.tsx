import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../apiClient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Login
  const onSubmit = async () => {
    console.log('Login button pressed');
    console.log('Username:', username);
    console.log('Password', password);
    // Gọi API login
    try {
      const response = await apiClient.post('/auth/login', {
        username: username,
        password: password,
      });

      console.log('Response:', response.data);

      // Lưu token vào AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(response.data));

      // Navigate to Categories screen
      navigation.navigate('Categories');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login to system</Text>
      <TextInput
        placeholder="Username"
        autoCorrect={false}
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={{
          borderWidth: 1,
          width: '80%',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={{
          borderWidth: 1,
          width: '80%',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Login" onPress={onSubmit} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
