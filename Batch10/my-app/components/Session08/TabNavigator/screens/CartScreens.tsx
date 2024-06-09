import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const CartScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
