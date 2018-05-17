import React from 'react';
import { View } from 'react-native';
import ShoppingCartContainer from './Containers/ShoppingCartContainer';
import ShoppingCartTotalContainer from './Containers/ShoppingCartTotalContainer';
import ProductContainer from './Containers/ProductContainer';

export default ShoppingCartApp = () => (
  <View style={{ flex: 1, marginTop: 24, }}>
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 6 }}>
        <ProductContainer />
      </View>
    </View>
    <View style={{ height: '40%', justifyContent: 'flex-end' }}>
      <View style={{}}>
        <ShoppingCartContainer />
      </View>
      <View style={{ paddingTop: 6 }}>
        <ShoppingCartTotalContainer />
      </View>
    </View>
  </View >
);
