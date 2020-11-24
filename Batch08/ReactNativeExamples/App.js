/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import FriendAvatar from './src/components/FriendAvatar';
import HeartButton from './src/components/HeartButton';
import Product from './src/components/Product';
import Products from './src/components/Products';

import Basic from './src/Session04/Basic';
import FlexExample from './src/Session04/FlexExample';
import ImageBgExample from './src/Session04/ImageBgExample';
import Login1 from './src/Session04/Login/Login1';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <Text>Hello React Native 1</Text> */}
      {/* <FriendAvatar></FriendAvatar> */}
      {/* <HeartButton></HeartButton> */}
      {/* <Product></Product> */}
      {/* <Products></Products> */}
      {/* <FlexExample /> */}
      {/* <ImageBgExample /> */}
      <Login1 />
    </SafeAreaView>
  );
};

export default App;
