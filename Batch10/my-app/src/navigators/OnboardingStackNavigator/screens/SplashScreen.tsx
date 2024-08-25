import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import Container from '@/components/Container';

import logoXml from './assets/logoXml';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../OnboardingStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: NativeStackNavigationProp<OnboardingStackParamList>;
};

const SplashScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={async () => {
          // GET
          const username = await AsyncStorage.getItem('username');
          const password = await AsyncStorage.getItem('password');
          const age = await AsyncStorage.getItem('age');
          const profile = await AsyncStorage.getItem('profile');

          // Object
          const profileObject = profile ? JSON.parse(profile) : null;

          // Number
          const ageNumber = age ? parseInt(age) : 0;

          // Boolean
          const isLogin = await AsyncStorage.getItem('isLogin');
          const isLoginBoolean = isLogin === 'true';

          // Array
          const array = await AsyncStorage.getItem('array');
          const arrayObject = array ? JSON.parse(array) : [];

          // Alert.alert('Thông báo', `username: ${username}, password: ${password}`);
          // Autologin
          if (username && password) {
            // Call api login
            //
            navigation.navigate('Onboarding1');
            //
          } else {
            navigation.navigate('Onboarding1');
          }
        }}
      >
        <View style={styles.container}>
          <Image source={require('./assets/logo.png')} style={{ width: 140, height: 160 }} />
          {/* <SvgXml xml={logoXml} width='40%' /> */}
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
