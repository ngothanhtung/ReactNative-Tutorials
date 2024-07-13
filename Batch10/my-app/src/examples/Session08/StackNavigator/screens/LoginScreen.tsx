import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title='Home'
        onPress={() => {
          // go back to HomeScreen
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
