// Notes:
// - expo install react-native-svg

import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import GilroyText from '../components/GilroyText';
import Logo from '../components/Logo';
import Button from '../components/Button';
import svg1 from './svg/svg1';

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
});

export default class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.logoContainer}>
          <Logo />
          <View style={{ height: 64 }} />
          <SvgXml xml={svg1} style={styles.logo} />
        </View>
        <View style={{ marginTop: 56, alignItems: 'center' }}>
          <GilroyText style={{ fontSize: 24, color: '#111A2C', lineHeight: 32 }} fontStyle='SemiBold'>
            Choose a Favourite Food
          </GilroyText>

          <View style={{ height: 16 }} />
          <GilroyText>When you oder Eat Steet, we’ll hook you up with</GilroyText>
          <GilroyText>exclusive coupon, specials and rewards</GilroyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
          <View style={{ backgroundColor: '#FF6C44', width: 30, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
          <View style={{ backgroundColor: 'rgba(255,108,68,0.4)', width: 10, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
          <View style={{ backgroundColor: 'rgba(255,108,68,0.4)', width: 10, height: 8, borderRadius: 4, marginHorizontal: 5 }}></View>
        </View>
        <View style={{ flex: 1 }} />

        <View style={{ marginBottom: 32, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <GilroyText fontStyle='Medium' style={{ fontSize: 16, color: '#757D85' }}>
            Skip
          </GilroyText>
          <Button style={{ backgroundColor: '#FF6C44', width: 168, height: 56 }} titleColor='white' title='Next' />
        </View>
      </View>
    );
  }
}
