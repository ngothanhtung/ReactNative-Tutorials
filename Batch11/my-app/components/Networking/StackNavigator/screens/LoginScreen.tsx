import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Categories from '../../components/Categories';
import Login from '../../components/Login';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
