import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const NotificationsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af0fad',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
