import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const NewsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
