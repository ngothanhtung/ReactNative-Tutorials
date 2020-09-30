/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShoppingCarts from '../../modules/main/components/ShoppingCarts';

const ShoppingCartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ShoppingCarts />
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
