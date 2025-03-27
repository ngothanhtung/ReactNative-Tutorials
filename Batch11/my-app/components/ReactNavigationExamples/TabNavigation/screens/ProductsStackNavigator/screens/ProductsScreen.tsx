import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const ProductsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Danh sách sản phẩm</Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
