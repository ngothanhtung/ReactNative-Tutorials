import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import apiClient from '../Networking/apiClient';

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: 'tungnt@softech.vn',
      password: '123456789',
    },
  });

  // Login
  const onSubmit = async (values: any) => {
    console.log('values', values);
    return;

    console.log('Login button pressed');

    // Gọi API login
    try {
      const response = await apiClient.post('/auth/login', {
        username: 'username',
        password: 'password',
      });

      console.log('Response:', response.data);

      // Lưu token vào AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Text>Login to system</Text>

      <Controller
        name="username"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              placeholder="Username"
              autoCorrect={false}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                width: '80%',
                padding: 10,
                marginBottom: 10,
              }}
            />
          );
        }}
      />
      {errors.username && <Text style={styles.error}>Username is required.</Text>}

      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={true}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                width: '80%',
                padding: 10,
                marginBottom: 10,
              }}
            />
          );
        }}
      />
      {errors.password && <Text style={styles.error}>Password is required.</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
