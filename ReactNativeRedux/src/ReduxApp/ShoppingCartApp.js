import React from 'react';
import { View } from 'react-native';
import ShoppingCartContainer from './Containers/ShoppingCartContainer';
import ShoppingCartTotalContainer from './Containers/ShoppingCartTotalContainer';

export default ShoppingCartApp = () => (
  <View style={{ flex: 1 }}>
    <ShoppingCartContainer />
    <ShoppingCartTotalContainer />
  </View>
);
