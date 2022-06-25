import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {};

const NetworkingWithAxios = (props: Props) => {
  let user: any = null;
  const onSubmit = () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

    // Promise
    axios
      .post(url, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSubmitAsync = async () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

    try {
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
      user = response.data;
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  const getProductsAsync = async () => {
    const url = 'https://server.aptech.io/training/products';
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + user.access_token,
      },
    });

    console.log(response.data);
  };

  return (
    <SafeAreaView>
      <Text>NetwotkingWithAxios</Text>
      <Button title='Login' onPress={onSubmit} />
      <Button title='Login Async' onPress={onSubmitAsync} />

      <Button title='Get Products' onPress={getProductsAsync} />
    </SafeAreaView>
  );
};

export default NetworkingWithAxios;
