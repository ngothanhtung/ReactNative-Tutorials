import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';

type Props = {};

const ImageExample = (props: Props) => {
  return (
    <ImageBackground resizeMode='cover' blurRadius={20} source={require('./assets/oppo.jpeg')} style={{ width: '100%', height: '100%' }}>
      {/* <Image source={require('./assets/oppo.jpeg')} style={{ width: '100%', height: 100 }} /> */}
    </ImageBackground>
  );
};

export default ImageExample;
