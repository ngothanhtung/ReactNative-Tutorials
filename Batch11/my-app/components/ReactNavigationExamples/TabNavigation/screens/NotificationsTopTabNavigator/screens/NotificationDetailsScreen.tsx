import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const NotificationDetailsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Chi tiết thông báo</Text>
    </View>
  );
};

export default NotificationDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
