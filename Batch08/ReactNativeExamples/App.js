import React from 'react';
import { View, Text } from 'react-native';

import FriendAvatar from './src/components/FriendAvatar';
import HeartButton from './src/components/HeartButton';
import Product from './src/components/Product';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#bdc3c7' }}>
      <Text>Hello React Native 1</Text>
      <FriendAvatar></FriendAvatar>
      <HeartButton></HeartButton>
      <Product></Product>
    </View>
  );
};

export default App;
