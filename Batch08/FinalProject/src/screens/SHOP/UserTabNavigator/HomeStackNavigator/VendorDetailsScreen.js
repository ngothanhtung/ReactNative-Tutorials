/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text } from 'react-native';

const VendorDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  console.log(product);
  return (
    <View style={{ flex: 1 }}>
      <Text>Details</Text>
    </View>
  );
};

export default VendorDetailsScreen;
