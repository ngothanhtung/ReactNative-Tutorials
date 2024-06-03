import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import axios from 'axios';

type Props = {};

const AxiosExample = (props: Props) => {
  React.useEffect(() => {
    const url1 = 'https://jsonplaceholder.typicode.com/posts';
    axios
      .get(url1)
      .then((response) => {
        console.log(response); // response
        console.log(response.data); // JSON
      })
      .catch((error) => {});
  }, []);

  return (
    <View>
      <Text>AxiosExample</Text>
    </View>
  );
};

export default AxiosExample;

const styles = StyleSheet.create({});
