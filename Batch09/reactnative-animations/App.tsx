import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Movement from './src/components/Movement';
import ReMovement from './src/components/Reanimated/ReMovement';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Movement /> */}
      <ReMovement />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
