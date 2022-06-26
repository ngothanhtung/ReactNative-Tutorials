import { View, Text } from 'react-native';
import React from 'react';
import logoSvg from './assets/logo';
import logo2Svg from './assets/logo2';
import { SvgXml } from 'react-native-svg';
type Props = {};

const SvgExample = (props: Props) => {
  return (
    <View>
      <SvgXml xml={logoSvg} />

      <SvgXml xml={logo2Svg} />
    </View>
  );
};

export default SvgExample;
