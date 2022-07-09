import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import Logo from '../components/Logo';
import Header from '../components/Header';
import TextBox from '../components/TextBox';
import SwitchButton from '../components/SwitchButton';
import GilroyText from '../components/GilroyText';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    backgroundColor: 'white',
  },

  logoContainer: {
    marginTop: 48,
    // backgroundColor: 'yellow',
  },

  headerContainer: {
    height: 64,
    marginTop: 40,
    // backgroundColor: '#2ecc71',
  },

  inputContainer: {
    marginTop: 40,
    flex: 3,
    backgroundColor: 'white',
  },

  savemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  signupContainer: {
    marginTop: 24,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  footerContainer: {
    // backgroundColor: '#9b59b6',
    marginBottom: 24,
  },
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function LoginScreen() {
  const [email, setEmail] = React.useState('tungnt@softech.vn');
  const [password, setPassword] = React.useState('123456789');

  return (
    <View style={styles.container}>
      {/* Begin: LOGO */}
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      {/* End: LOGO */}

      {/* --------------------------------------------------------------- */}

      {/* Begin: HEADER */}
      <View style={styles.headerContainer}>
        <Header title="Let's Sign You In" subTitle="Welcome back, you've been missed!" />
      </View>
      {/* End: HEADER */}

      {/* --------------------------------------------------------------- */}

      {/* Begin: INPUT */}
      <View style={styles.inputContainer}>
        <TextBox
          label='Email'
          isValid={validateEmail(email)}
          icon='check-circle-outline'
          placeholder='Please enter your email'
          underlineColorAndroid='transparent'
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextBox
          label='Password'
          icon='eye-outline'
          placeholder='Please enter your password'
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        {/* SAVE ME & FORGOT PASSWORD */}
        <View style={styles.savemeContainer}>
          <SwitchButton title='Save me' />
          <GilroyText>Forgot Password?</GilroyText>
        </View>
        <View style={{ height: 32 }} />
        {/* LOGIN BUTTON */}
        <Button style={{ backgroundColor: '#FF6C44' }} titleColor='white' title='Sign In' />

        {/* SIGNUP */}
        <View style={styles.signupContainer}>
          <GilroyText style={{ fontSize: 16 }}>Don't have an account?</GilroyText>
          <GilroyText
            style={{
              fontSize: 16,
              color: '#FF6C44',
              fontFamily: 'SVN-Gilroy-SemiBold',
              marginLeft: 4,
            }}
          >
            Sign Up
          </GilroyText>
        </View>
      </View>
      {/* End: INPUT */}

      {/* --------------------------------------------------------------- */}

      {/* Begin: FOOTER */}
      <View style={styles.footerContainer}>
        {/* FACEBOOK LOGIN */}
        <Button style={{ backgroundColor: '#0064C0', height: 50 }} titleColor='white' title='Continue With Facebook' icon={<Icon name='logo-facebook' size={18} color='white' />} />
        <View style={{ height: 16 }} />
        {/* GOOGLE LOGIN */}
        <Button style={{ backgroundColor: '#F5F5F8', height: 50 }} titleColor='#898B9A' title='Continue With Google' image={<Image style={{ height: 16, width: 16 }} source={require('../assets/google-icon.png')} />} />
      </View>
      {/* End: FOOTER */}
    </View>
  );
}
