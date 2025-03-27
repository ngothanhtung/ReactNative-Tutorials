import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const NotificationsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Danh sách thông báo</Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
