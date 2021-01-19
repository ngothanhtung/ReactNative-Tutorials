import React from 'react';
import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../actions';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.sagaReducer.products);

  return (
    <View>
      <Text></Text>
      <Button
        title="Get products"
        onPress={() => {
          dispatch(getProducts());
        }}
      />
    </View>
  );
}
