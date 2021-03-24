import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Login from './Login';
export default function App() {
  return (
    <View flex={1}>
      <Login />
    </View>
  );
}
