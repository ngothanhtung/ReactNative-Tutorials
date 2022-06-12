/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
// REFS:
// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 as FontAwesome5Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { SvgXml } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

const PLACEHOLDER_TEXT_COLOR = '#ffffff';
const MAIN_COLOR = '#4a148c';
const LIGHT_COLOR = '#ab47bc';
const ICON_COLOR = '#ffffff';
const ICON_SIZE = 16;

const GRADIENT_COLORS = ['#6a1b9a', '#7b1fa2', '#8e24aa', '#6a1b9a'];

const xmlWave1 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave2 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

const xmlWave3 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave4 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

class Logo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <FontAwesome5Icon name='spa' size={75} style={styles.logo} />
        </View>
      </View>
    );
  }
}

class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={GRADIENT_COLORS} style={{ flex: 1 }}>
          {/* WAVE */}

          <View style={{ height: 100, width: '100%', position: 'absolute', top: 0, opacity: 0.5, transform: [{ rotate: '180deg' }] }}>
            <SvgXml xml={xmlWave4} width='100%' height='100%' />
          </View>

          <View style={{ height: 160, width: '100%', position: 'absolute', top: 0, opacity: 0.75, transform: [{ rotate: '180deg' }] }}>
            <SvgXml xml={xmlWave3} width='100%' height='100%' />
          </View>
          <ScrollView>
            {/* LOGO */}

            <Logo />

            <View style={{ flex: 1, justifyContent: 'flex-start', padding: 24 }}>
              <View style={styles.inputContainer}>
                <FontAwesome5Icon name='id-card-alt' size={ICON_SIZE} style={{ paddingRight: 16 }} color={ICON_COLOR} />
                <TextInput placeholder='Username' placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.textInput} />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome5Icon name='user-alt' size={ICON_SIZE} style={{ paddingRight: 16 }} color={ICON_COLOR} />
                <TextInput placeholder='Full Name' placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.textInput} />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome5Icon name='phone' size={ICON_SIZE} style={{ paddingRight: 16 }} color={ICON_COLOR} />
                <TextInput placeholder='Phone' placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.textInput} />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome5Icon name='lock' size={ICON_SIZE} style={{ paddingRight: 16 }} color={ICON_COLOR} />
                <TextInput placeholder='Password' placeholderTextColor={PLACEHOLDER_TEXT_COLOR} style={styles.textInput} />
              </View>
            </View>
            <View style={{ height: 100 }}></View>
          </ScrollView>

          {/* WAVE */}
          <View style={{ height: 100, width: '100%', position: 'absolute', bottom: 0, opacity: 0.35 }}>
            <SvgXml xml={xmlWave1} width='100%' height='100%' />
          </View>

          <View style={{ height: 160, width: '100%', position: 'absolute', bottom: 0, opacity: 8 }}>
            <SvgXml xml={xmlWave2} width='100%' height='100%' />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: '700', fontSize: 18, color: '#ffffff' }}>Register</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: { height: 280, alignItems: 'center', justifyContent: 'flex-end' },
  logoBorder: { height: 160, width: 160, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderRadius: 80, borderWidth: 16, borderColor: LIGHT_COLOR },
  logo: { color: MAIN_COLOR },

  inputContainer: { borderBottomColor: PLACEHOLDER_TEXT_COLOR, borderBottomWidth: 0.5, marginVertical: 16, flexDirection: 'row', alignItems: 'center', paddingBottom: 8 },
  textInput: { fontWeight: '400', flex: 1 },

  button: { marginHorizontal: 24, bottom: 0, marginVertical: 32, height: 54, borderColor: '#ffffff', borderWidth: 1, backgroundColor: '#ffffff' + 75, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
});
