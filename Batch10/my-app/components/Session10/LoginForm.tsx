import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  username: string;
  password: string;
};

type Props = {};

const LoginForm = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  console.log('🐞 errors', errors);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        name='username'
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      {errors.username && <Text style={styles.error}>Username is required.</Text>}

      <Controller
        name='password'
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry={true} />;
        }}
      />

      <Button title='Login' onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  error: {
    color: 'red',
  },
});
