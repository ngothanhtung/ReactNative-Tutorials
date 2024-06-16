import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

const schema = yup
  .object({
    name: yup.string().required('Tên danh mục không được bỏ trống'),
    description: yup.string(),
  })
  .required();

type FormData = {
  name: string;
  description?: string;
};

type Props = {};

const CreateCategory = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  console.log('🐞 errors', errors);

  const onSubmit = (values: any) => {
    let data = JSON.stringify(values);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://server.aptech.io/online-shop/categories',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoidHVuZ250QHNvZnRlY2gudm4iLCJlbWFpbCI6InR1bmdudEBzb2Z0ZWNoLnZuIiwic3ViIjoxMCwiYXBwbGljYXRpb24iOiJPbmxpbmUgU2hvcCAtIEFQSSIsInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmF0b3JzIn1dLCJpYXQiOjE3MTg0NTE0MzksImV4cCI6MTc1MDAwOTAzOX0.nQ4mpj2bdqZXV-ETi63SATwuho7XopFCfjVaRCq6KBE',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput placeholder='Tên danh mục' style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      {errors.name && <Text style={styles.error}>{errors?.name?.message}</Text>}

      <Controller
        name='description'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput placeholder='Mô tả' style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />;
        }}
      />

      <Button title='Create' onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateCategory;

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
