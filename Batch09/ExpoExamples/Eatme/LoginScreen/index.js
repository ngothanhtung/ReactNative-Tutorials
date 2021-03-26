import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import Logo from './Logo';
import Header from './Header';
import TextBox from './TextBox';
import SwitchButton from './SwitchButton';
import GilroyText from './GilroyText';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },

  logoContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
  },
  headerContainer: {
    height: 60,
    // backgroundColor: '#2ecc71',
    marginTop: 24,
  },
  inputContainer: {
    flex: 3,
    backgroundColor: 'white',
  },

  footerContainer: {
    flex: 0,
    // backgroundColor: '#9b59b6',
  },
});

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Begin: LOGO */}
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        {/* End: LOGO */}

        {/* --------------------------------------------------------------- */}

        {/* Begin: HEADER */}
        <View style={styles.headerContainer}>
          <Header title="Let's You Sign In" subTitle="Welcome back, you've been missed" />
        </View>
        {/* End: HEADER */}

        {/* --------------------------------------------------------------- */}

        {/* Begin: INPUT */}
        <View style={styles.inputContainer}>
          <TextBox label='Email' icon='check-circle-outline' placeholder='Please enter your email' />
          <TextBox label='Password' icon='eye-outline' placeholder='Please enter your password' />

          {/* SAVE ME & FORGOT PASSWORD */}
          <View flexDirection='row' alignItems='center' justifyContent='space-between'>
            <SwitchButton title='Remember me' />
            <GilroyText>Forgot password?</GilroyText>
          </View>
          <View height={12} />
          {/* LOGIN BUTTON */}
          <Button color='#FF6C44' titleColor='white' title='Sign In' />
        </View>
        {/* End: INPUT */}

        {/* --------------------------------------------------------------- */}

        {/* Begin: FOOTER */}
        <View style={styles.footerContainer}>
          {/* FACEBOOK LOGIN */}
          <Button color='#0064C0' titleColor='white' title='Continue With Facebook' icon={<Icon name='logo-facebook' size={18} color='white' />} />

          {/* GOOGLE LOGIN */}
          <Button color='#F5F5F8' titleColor='#898B9A' title='Continue With Google' image={<Image style={{ height: 16, width: 16 }} source={require('../../assets/google-icon.png')} />} />
        </View>
        {/* End: FOOTER */}
      </SafeAreaView>
    );
  }
}
