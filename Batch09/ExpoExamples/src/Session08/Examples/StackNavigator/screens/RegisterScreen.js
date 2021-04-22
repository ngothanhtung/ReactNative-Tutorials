import React from 'react';
import { View, Text } from 'react-native';

export default function RegisterScreen({ navigation, route }) {
  console.log(route);
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
      <Text>REGISTER SCREEN</Text>
      <Text>{route.params.email}</Text>
    </View>
  );
}
