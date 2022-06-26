import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import logoSvg from './assets/logo';
import logo2Svg from './assets/logo2';
import { SvgXml } from 'react-native-svg';

const width = Dimensions.get('window').width;
let phoneName = 'Stardard';
if (width <= 320) {
  phoneName = 'SE';
} else if (width <= 375) {
  phoneName = 'Mini';
}

type Props = {};

const SvgExample = (props: Props) => {
  return (
    <View>
      <SvgXml xml={logoSvg} />
      <SvgXml xml={logo2Svg} />
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
};

export default SvgExample;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});
