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

import UI01 from './src/Session04/UI01';
import UI02 from './src/Session04/UI02';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Hello React Native 1</Text> */}
      {/* <FriendAvatar></FriendAvatar> */}
      {/* <HeartButton></HeartButton> */}
      {/* <Product></Product> */}
      {/* <Products></Products> */}
      {/* <FlexExample /> */}
      {/* <ImageBgExample /> */}
      {/* <Login1 /> */}
      <UI01 />
      {/* <UI02 /> */}
    </View>
  );
};

export default App;
