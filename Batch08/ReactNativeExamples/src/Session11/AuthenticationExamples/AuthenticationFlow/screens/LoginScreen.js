/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>LOGIN SCREEN</Text>
      <Button
        title="Login"
        onPress={() => {
          auth()
            .signInWithEmailAndPassword('tungnt@softech.vn', '123456789')
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      />
    </View>
  );
}
