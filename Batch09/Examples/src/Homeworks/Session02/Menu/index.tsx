// Tham khảo: https://docs.expo.io/versions/latest/sdk/linear-gradient/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Block from './Block';
import Footer from './Footer';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const ICON_SIZE = 26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2E',
  },

  block: {
    flex: 2,
    justifyContent: 'flex-end',
  },

  row: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  icon: {
    color: '#ffffff',
  },
});

const Menu = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.block}>
        <View style={styles.row}>
          <Block color1='#81d4fa' color2='#039be5' text='General' icon={<AntDesign name='appstore1' size={ICON_SIZE} style={styles.icon} />} />
          <Block color1='#b39ddb' color2='#651fff' text='Transport' icon={<FontAwesome5 name='bus' size={ICON_SIZE} style={styles.icon} />} />
        </View>

        <View style={styles.row}>
          <Block color1='#f48fb1' color2='#ff4081' text='Shopping' icon={<FontAwesome5 name='shopping-bag' size={ICON_SIZE} style={styles.icon} />} />
          <Block color1='#ffcc80' color2='#ff6d00' text='Bills' icon={<FontAwesome5 name='file-invoice' size={ICON_SIZE} style={styles.icon} />} />
        </View>

        <View style={styles.row}>
          <Block color1='#90caf9' color2='#2962ff' text='Entertainment' icon={<FontAwesome5 name='youtube' size={ICON_SIZE} style={styles.icon} />} />
          <Block color1='#a5d6a7' color2='#00c853' text='Grocery' icon={<FontAwesome5 name='shopping-basket' size={ICON_SIZE} style={styles.icon} />} />
        </View>

        <Footer />
      </View>
    </View>
  );
};

export default Menu;
