/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HOME SCREEN</Text>
      <Button
        title="Products"
        onPress={() => {
          navigation.navigate('Products');
        }}
      />
    </View>
  );
}
