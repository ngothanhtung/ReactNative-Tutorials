import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 60 }} />
      <View style={{ alignItems: 'center' }}>
        <Logo />
        <View style={{ height: 32 }} />
        <Header text='Getting Started' />
        <View style={{ height: 8 }} />
        <SubHeader text='Create an account to continue!' />
      </View>
      <View style={{ flex: 1 }} />
      <View style={{ gap: 16 }}>
        <CustomButton
          color='#F5F5F8'
          textColor='#111A2C'
          text='Sign Up'
          onPress={() => {
            console.log('Sign Up');
          }}
        />
        <CustomButton
          icon={<AntDesign name='google' size={24} color='white' />}
          text='Continue With Google'
          onPress={() => {
            console.log('Sign In');
          }}
        />
        <CustomButton
          icon={<Entypo name='facebook' size={24} color='white' />}
          color='#0064C0'
          text='Continue With Facebook'
          onPress={() => {
            console.log('Sign In');
          }}
        />
      </View>
      <View style={{ height: 32 }} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    paddingHorizontal: 16,
    gap: 16,
  },
});
