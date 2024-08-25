import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Container from '@/components/Container';
import PrimaryButton from '@/navigators/OnboardingStackNavigator/components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigators/RootStackNavigator/RootStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <PrimaryButton
        text='Login'
        onPress={async () => {
          // LOGIN THÀNH CÔNG
          await AsyncStorage.setItem('username', 'admin');
          await AsyncStorage.setItem('password', '123456789');
          await AsyncStorage.setItem('age', '18');
          await AsyncStorage.setItem('profile', JSON.stringify({ phone: '0905123456', email: 'admin@gmail.com' }));
          // save true / false
          await AsyncStorage.setItem('isLogin', 'true');
          // Array
          await AsyncStorage.setItem('array', JSON.stringify(['a', 'b', 'c']));
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
