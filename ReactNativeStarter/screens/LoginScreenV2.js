import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  Dimensions, KeyboardAvoidingView
} from 'react-native';

import COLORS from '../constants/COLORS';

// BEGIN: CONSTANTS
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

// Get value from CONSTANTS
const WHITE_COLOR = COLORS.White;
const DARK_COLOR = '#1E1A17';

const BACKGROUND_IMAGE = require('../resources/background.png');
const LOGO_IMAGE = require('../resources/aptech-logo.png');
const MAIL_ICON = require('../resources/mail_icon.png');
const LOCK_ICON = require('../resources/lock_icon.png');

// END CONSTANTS

export default class LoginScreenV2 extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* BACKGROUND */}
        <Image source={BACKGROUND_IMAGE} style={styles.backgroundImage} />
        {/* LOGIN COMPONENTS */}
        <View style={styles.loginContainer}>
          {/* LOGO IMAGE */}
          <Image source={LOGO_IMAGE} style={styles.logoImage} />

          {/* USERNAME FIELD */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={MAIL_ICON} style={styles.inputIcon} />
              <TextInput
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.InputText}
                underlineColorAndroid={'transparent'}
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
              />
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* PASSWORD FIELD */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={LOCK_ICON} style={styles.inputIcon} />
              <TextInput
                autoFocus={false}
                style={styles.InputText}
                underlineColorAndroid={'transparent'}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
              />
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={{
              backgroundColor: DARK_COLOR,
              alignItems: 'center',
              padding: 15,
              width: WINDOW_WIDTH / 10 * 9,
              borderRadius: 12,
              marginVertical: 10
            }}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 16, color: WHITE_COLOR, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>

          {/* REGISTER AND FORGOT PASSWORD */}
          <View style={styles.footerContainer}>
            <View style={{ width: '35%' }}>
              <TouchableOpacity>
                <Text style={{ color: WHITE_COLOR }}>Create account</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '25%' }}></View>
            <View style={{ width: '50%' }}>
              <TouchableOpacity>
                <Text style={{ color: WHITE_COLOR }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    height: '100%'
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logoImage: {
    width: WINDOW_WIDTH / 2,
    height: WINDOW_WIDTH / 2,
    borderRadius: WINDOW_WIDTH / 4,
    alignSelf: 'center',
    marginVertical: 15
  },
  inputContainer: {
    width: WINDOW_WIDTH / 10 * 9,
    height: 50,
    marginVertical: 10
  },
  subInputContainer: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  inputIcon: {
    width: 24,
    height: 24,
    tintColor: WHITE_COLOR,
    alignSelf: 'center',
    marginBottom: 5,
    marginRight: 12
  },

  inputBackground: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0
  },

  footerContainer: {
    flexDirection: 'row',
    width: '80%',
  }
});
