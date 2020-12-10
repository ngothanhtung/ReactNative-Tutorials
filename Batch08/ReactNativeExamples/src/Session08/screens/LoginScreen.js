/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>LOGIN SCREEN</Text>
      <Button
        title="Go to TAB"
        onPress={() => {
          navigation.navigate('Tab');
        }}
      />
    </View>
  );
}
