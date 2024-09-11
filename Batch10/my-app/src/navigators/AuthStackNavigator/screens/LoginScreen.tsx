import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from '@/components/Container';
import PrimaryButton from '@/navigators/OnboardingStackNavigator/components/PrimaryButton';
import { RootStackParamList } from '@/navigators/RootStackNavigator/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { auth, db } from '../../../firebase/initializeApp';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const LoginScreen = ({ navigation }: Props) => {
  const getProfile = async (uid: string) => {
    const docRef = doc(db, 'profiles', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <PrimaryButton
        text='Login'
        onPress={async () => {
          // LOGIN THÀNH CÔNG
          // await AsyncStorage.setItem('username', 'admin');
          // await AsyncStorage.setItem('password', '123456789');
          // await AsyncStorage.setItem('age', '18');
          // await AsyncStorage.setItem('profile', JSON.stringify({ phone: '0905123456', email: 'admin@gmail.com' }));
          // // save true / false
          // await AsyncStorage.setItem('isLogin', 'true');
          // // Array
          // await AsyncStorage.setItem('array', JSON.stringify(['a', 'b', 'c']));

          const email = 'tungnt@softech.vn';
          const password = '123456789';

          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log('user uid', user.uid);

              getProfile(user.uid).then((data) => {
                console.log('data', data);
              });
              // Load profile

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('errorCode', errorCode);
              console.log('errorMessage', errorMessage);
            });
        }}
      />

      <PrimaryButton
        text='Sign out'
        onPress={() => {
          auth
            .signOut()
            .then(() => {
              // Sign-out successful.
              console.log('Sign-out successful.');
            })
            .catch((error) => {
              // An error happened.
              console.log('An error happened.');
            });
        }}
      />

      <PrimaryButton
        text='Sign Up'
        onPress={() => {
          navigation.navigate('AuthStackNavigator', {
            screen: 'SignUp',
          });
        }}
      />
      <PrimaryButton
        text='Create workspace'
        onPress={async () => {
          navigation.navigate('WorkspaceStackNavigator', {
            screen: 'CreateWorkspace',
          });
        }}
      />
      <PrimaryButton
        text='Chat'
        onPress={async () => {
          navigation.navigate('ChatStackNavigator', {
            screen: 'ChatList',
          });
        }}
      />
    </Container>
  );
};

export default LoginScreen;

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
