import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Container from '@/components/Container';
import PrimaryButton from '@/navigators/OnboardingStackNavigator/components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator/RootStackParamList';

import { auth } from '../../../firebase/initializeApp';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUpScreen = ({ navigation }: Props) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>Sign Up Screen</Text>

      <PrimaryButton
        text='Sign Up'
        onPress={() => {
          const email = 'tungnt@softech.edu.vn';
          const password = '123456789';
          const auth = getAuth();

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log('user', user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }}
      />
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  text: {
    color: 'white',
  },
});
