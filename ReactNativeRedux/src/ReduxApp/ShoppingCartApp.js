import React from 'react';
import { View } from 'react-native';
import ShoppingCartContainer from './Containers/ShoppingCartContainer';
import ShoppingCartTotalContainer from './Containers/ShoppingCartTotalContainer';
import ProductContainer from './Containers/ProductContainer';

export default ShoppingCartApp = () => (
  <View style={{ flex: 1 }}>
    <ProductContainer />
    <ShoppingCartContainer />
    <ShoppingCartTotalContainer />
  </View>
);
