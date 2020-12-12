/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';

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
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </View>
  );
}
