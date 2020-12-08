/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetailScreen({ navigation, route }) {
  console.log(route);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>PRODUCT DETAIL SCREEN</Text>
      <Text>{route.params.item.id}</Text>
    </View>
  );
}
