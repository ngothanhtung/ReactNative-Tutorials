import { Button, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

import logoXml from './assets/logoXml';
import { StatusBar } from 'expo-status-bar';

type Props = {
  navigation: any;
};

const SplashScreen = ({ navigation }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Onboarding1');
      }}
    >
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={{ width: 140, height: 160 }} />
        {/* <SvgXml xml={logoXml} width='40%' /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
