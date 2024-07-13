import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const ProfileScreens = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
