import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import apiClient from '../Networking/apiClient';

// Kết hợp react-hook-form với yup để xác thực dữ liệu
// Cài 2 thư viện sau: yup và @hookform/resolvers
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    username: z.string().min(1, { message: 'Username is required' }).email('Invalid email address'),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters long' }),
  })
  .required();

type FormData = {
  username: string;
  password: string;
};

const LoginFormWithZodValidation = () => {
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    setError,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  // Login
  const onSubmit = async (values: FormData) => {
    // Kiểm tra username đã tồn tại hay chưa?
    // Call api:
    // true: đã tồn tại,

    if (values.username === 'admin@gmail.com') {
      setError('username', {
        type: 'manual',
        message: 'Username already exists',
      });

      setFocus('username');
    }
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
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
              returnKeyLabel="next"
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
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

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
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Reset"
        onPress={() => {
          // Reset all fields
          reset();

          // Reset specific field
          resetField('password');
          console.log('Reset button pressed');
          console.log('Reset form');
        }}
      />
    </View>
  );
};

export default LoginFormWithZodValidation;

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
