/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
// REFS:
// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { SvgXml } from 'react-native-svg';

const PLACEHOLDER_TEXT_COLOR = '#eeeeee';
const MAIN_COLOR = '#4a148c';
const LIGHT_COLOR = '#ab47bc';
const ICON_COLOR = '#ffffff';

const GRADIENT_COLORS = ['#6a1b9a', '#7b1fa2', '#8e24aa', '#6a1b9a'];

const xmlWave1 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave2 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

const xmlWave3 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave4 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  textInput: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },

  button: {
    height: 54,
    backgroundColor: MAIN_COLOR,
    borderRadius: 27,
    marginTop: 32,
  },
});

const TopWave = () => {
  return (
    <React.Fragment>
      <View
        style={{
          height: 100,
          width: '100%',
          position: 'absolute',
          top: 0,
          opacity: 0.5,
          transform: [{ rotate: '180deg' }],
        }}>
        <SvgXml xml={xmlWave4} width="100%" height="100%" />
      </View>

      <View
        style={{
          height: 160,
          width: '100%',
          position: 'absolute',
          top: 0,
          opacity: 0.75,
          transform: [{ rotate: '180deg' }],
        }}>
        <SvgXml xml={xmlWave3} width="100%" height="100%" />
      </View>
    </React.Fragment>
  );
};

const BottomWave = () => {
  return (
    <React.Fragment>
      <View
        style={{
          height: 100,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          opacity: 0.35,
        }}>
        <SvgXml xml={xmlWave1} width="100%" height="100%" />
      </View>

      <View
        style={{
          height: 160,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          opacity: 8,
        }}>
        <SvgXml xml={xmlWave2} width="100%" height="100%" />
      </View>
    </React.Fragment>
  );
};

const Logo = () => {
  return (
    <View
      style={{
        height: 280,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <LinearGradient
        colors={[MAIN_COLOR, LIGHT_COLOR]}
        style={{
          height: 190,
          width: 190,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}>
        <View
          style={{
            height: 140,
            width: 140,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 80,
          }}>
          <FontAwesome5Icon
            name="spa"
            size={75}
            style={{ color: MAIN_COLOR }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const UI = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient colors={GRADIENT_COLORS} style={{ flex: 1 }}>
        {/* TOP WAVE */}
        <TopWave />
        {/* LOGO */}
        <Logo />
        <View style={{ flex: 1, justifyContent: 'flex-start', padding: 24 }}>
          <View style={styles.inputContainer}>
            <FontAwesome5Icon
              name="id-card-alt"
              size={20}
              style={{ paddingRight: 16 }}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5Icon
              name="user-alt"
              size={20}
              style={{ paddingRight: 16 }}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5Icon
              name="phone"
              size={20}
              style={{ paddingRight: 16 }}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Phone"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5Icon
              name="lock"
              size={20}
              style={{ paddingRight: 16 }}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <LinearGradient
              colors={[LIGHT_COLOR, MAIN_COLOR]}
              useAngle
              angle={45}
              style={{
                flex: 1,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 27,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontWeight: '700', fontSize: 18, color: '#ffffff' }}>
                Register
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* BOTTOM WAVE */}
        <BottomWave />
      </LinearGradient>
    </View>
  );
};

export default UI;
