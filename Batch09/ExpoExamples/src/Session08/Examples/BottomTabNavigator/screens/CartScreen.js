import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FBFBFB', justifyContent: 'center', alignItems: 'center' }}>
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
