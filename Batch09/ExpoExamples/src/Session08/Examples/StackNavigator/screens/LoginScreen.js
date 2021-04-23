import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
      <Text>LOGIN SCREEN</Text>
      <Button
        title='Register'
        onPress={() => {
          navigation.navigate('Register', { email: 'tungnt@softech.vn' });
        }}
      />

      <Button
        title='Forgot Password'
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
      />
    </View>
  );
}
