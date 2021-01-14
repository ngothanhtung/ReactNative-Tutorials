import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import numeral from 'numeral'

export default function Total() {
  const addedProducts = useSelector((state) => state.shoppingReducer.addedProducts);

  const getTotal = () => {
    let result = addedProducts.reduce((total, item) => total + (item.product.price * item.quantity * (100 - item.product.discount)) / 100, 0);
    return numeral(result).format('0,0');
  };

  const getCountOfProducts = () => {
    return addedProducts.length
  }
  
  return (
    <View>
      <Text style={{ fontSize: 48, color: 'blue'}}>{getTotal()}</Text>
      <Text style={{ fontSize: 48, color: 'blue'}}>{getCountOfProducts()}</Text>
    </View>
  )
}
