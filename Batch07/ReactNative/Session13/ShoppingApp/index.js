/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

// COMPONENT
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductsSaga from './components/ProductsSaga';

export default function CounterApp() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 24}}>
        {/* <Products /> */}
        <ProductsSaga />
      </View>
      <View style={{flex: 1, padding: 24}}>
        <ShoppingCart />
      </View>
    </SafeAreaView>
  );
}
