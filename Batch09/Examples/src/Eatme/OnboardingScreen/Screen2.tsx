// Notes:
// - expo install react-native-svg

import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import GilroyText from '../components/GilroyText';
import Logo from '../components/Logo';
import svg2 from './svg/svg2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  circle: {
    alignSelf: 'center',
    position: 'absolute',
    width: 750,
    height: 750,
    borderRadius: 750 / 2,
    backgroundColor: 'rgba(255, 92, 1, 0.2)',
    marginTop: -300,
  },

  logoContainer: {
    marginTop: 48,
    alignItems: 'center',
  },

  logo: {
    width: 291,
    height: 305,
  },
});

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.logoContainer}>
        <Logo />
        <View style={{ height: 64 }} />
        {/* <SvgXml xml={svg2} style={styles.logo} /> */}
        <Image source={require('./images/2.png')} style={styles.logo} />
      </View>
      <View style={{ marginTop: 56, alignItems: 'center' }}>
        <GilroyText style={{ fontSize: 24, color: '#111A2C', lineHeight: 32 }} fontStyle='SemiBold'>
          Hot Delivery to Home
        </GilroyText>

        <View style={{ height: 16 }} />
        <GilroyText>We make food ordering fasr, simple and free-no</GilroyText>
        <GilroyText>matter if you order online or cash</GilroyText>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
        <View style={{ backgroundColor: 'rgba(255,108,68,0.4)', width: 10, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
        <View style={{ backgroundColor: '#FF6C44', width: 30, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
        <View style={{ backgroundColor: 'rgba(255,108,68,0.4)', width: 10, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}
