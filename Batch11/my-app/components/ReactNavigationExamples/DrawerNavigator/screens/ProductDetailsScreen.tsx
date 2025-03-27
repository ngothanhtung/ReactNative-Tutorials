import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const ProductDetailsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Chi tiết sản phẩm</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
