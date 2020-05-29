/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
// REFS:
// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections

import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import {SvgXml} from 'react-native-svg';

const PLACEHOLDER_TEXT_COLOR = '#ffffff';
const MAIN_COLOR = '#4a148c';
const LIGHT_COLOR = '#ab47bc';
const ICON_COLOR = '#ffffff';

const GRADIENT_COLORS = ['#6a1b9a', '#7b1fa2', '#8e24aa', '#6a1b9a'];

const xmlWave1 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave2 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

const xmlWave3 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-7.62,132.72 C195.53,-75.48 241.82,308.38 525.67,40.95 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;
const xmlWave4 = `<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-10.15,23.19 C189.05,209.70 319.98,-171.20 509.59,120.88 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: ${MAIN_COLOR};"></path></svg>`;

const index = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient colors={GRADIENT_COLORS} style={{flex: 1}}>
        {/* WAVE */}

        <View
          style={{
            height: 100,
            width: '100%',
            position: 'absolute',
            top: 0,
            opacity: 0.5,
            transform: [{rotate: '180deg'}],
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
            transform: [{rotate: '180deg'}],
          }}>
          <SvgXml xml={xmlWave3} width="100%" height="100%" />
        </View>

        <View
          style={{
            height: 280,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 160,
              width: 160,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 80,
              borderWidth: 16,
              borderColor: LIGHT_COLOR,
            }}>
            <FontAwesome5Icon
              name="spa"
              size={75}
              style={{color: MAIN_COLOR}}
            />
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-start', padding: 24}}>
          <View
            style={{
              borderBottomColor: PLACEHOLDER_TEXT_COLOR,
              borderBottomWidth: 1.5,
              marginVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5Icon
              name="id-card-alt"
              size={20}
              style={{paddingRight: 16}}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={{fontSize: 18, fontWeight: '700'}}
            />
          </View>
          <View
            style={{
              borderBottomColor: PLACEHOLDER_TEXT_COLOR,
              borderBottomWidth: 1.5,
              marginVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5Icon
              name="user-alt"
              size={20}
              style={{paddingRight: 16}}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={{fontSize: 18, fontWeight: '700'}}
            />
          </View>
          <View
            style={{
              borderBottomColor: PLACEHOLDER_TEXT_COLOR,
              borderBottomWidth: 1.5,
              marginVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5Icon
              name="phone"
              size={20}
              style={{paddingRight: 16}}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Phone"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={{fontSize: 18, fontWeight: '700'}}
            />
          </View>
          <View
            style={{
              borderBottomColor: PLACEHOLDER_TEXT_COLOR,
              borderBottomWidth: 1.5,
              marginVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5Icon
              name="lock"
              size={20}
              style={{paddingRight: 16}}
              color={ICON_COLOR}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
              style={{fontSize: 18, fontWeight: '700'}}
            />
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 32,
              height: 54,
              backgroundColor: MAIN_COLOR,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '700', fontSize: 18, color: '#ffffff'}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {/* WAVE */}
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
      </LinearGradient>
    </View>
  );
};

export default index;
