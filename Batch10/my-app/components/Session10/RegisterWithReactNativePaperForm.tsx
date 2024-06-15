import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInput } from 'react-native-paper';

const schema = yup
  .object({
    username: yup.string().required('Tên đăng nhập không được bỏ trống'),
    password: yup.string().required('Mật khẩu không được bỏ trống'),
    email: yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
    // age: yup.number().positive('Tuổi phải lớn hơn 0').integer('Tuổi phải là số nguyên').moreThan(18, 'Tuổi phải lớn hơn 18').required('Tuổi không được bỏ trống'),
    // status: yup.string().oneOf(['active', 'pending', 'inactive'], 'Trạng thái không hợp lệ').required('Trạng thái không được bỏ trống'),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, { message: 'Phone number must be a number' })
      .length(10, 'Số điện thoại phải có 10 chữ số')
      .required(),
  })
  .required();

type FormData = {
  username: string;
  password: string;
  phone: string;
  email: string;
};

type Props = {};

const RegisterWithReactNativePaperForm = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
      phone: '',
    },
    resolver: yupResolver(schema),
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
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      {errors.username && <Text style={styles.error}>{errors?.username?.message}</Text>}

      <Controller
        name='password'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry={true} />;
        }}
      />

      {errors.password && <Text style={styles.error}>{errors?.password?.message}</Text>}

      <Controller
        name='phone'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      {errors.phone && <Text style={styles.error}>{errors?.phone?.message}</Text>}

      <Controller
        name='email'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      {errors.email && <Text style={styles.error}>{errors?.email?.message}</Text>}

      <Button title='Register' onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterWithReactNativePaperForm;

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
