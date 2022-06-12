import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { Ionicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  icon: {
    color: '#ffffff',
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#282B47',
  },

  footerIcon: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Footer = () => {
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.footerIcon}>
        <FontAwesome5 name='shopping-cart' size={22} style={{ color: '#ff4081' }} />
      </View>
      <View style={styles.footerIcon}>
        <Ionicons name='md-stats-chart' size={22} style={styles.icon} />
      </View>
      <View style={styles.footerIcon}>
        <Fontisto name='person' size={22} style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

export default Footer;
