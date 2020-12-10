import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { data } = route.params;
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
