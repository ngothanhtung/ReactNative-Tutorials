import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import Input from './Input';
import PasswordInput from './PasswordInput';
import SaveMeButton from './SaveMeButton';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/Logo/eatme.png')} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Let’s Sign You In</Text>
        <Text style={styles.subHeaderText}>Welcome back, you’ve been missed!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input label='Email' />
        <Input label='Password' isPassword={true} />
      </View>
      <View style={styles.saveMeContainer}>
        <SaveMeButton />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  logoContainer: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 60,
    width: 190,
  },

  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'SVN-Gilroy-Bold',
  },
  subHeaderText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'medium',
    color: '#525C67',
    fontFamily: 'SVN-Gilroy-Regular',
  },

  inputContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
    gap: 16,
  },

  saveMeContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
});
