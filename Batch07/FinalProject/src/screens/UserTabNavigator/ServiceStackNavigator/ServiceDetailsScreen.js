/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import ServiceDetails from '../../../modules/main/components/SeviceDetails';

const ProductDetailsScreen = ({ route }) => {
  const { serviceId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ServiceDetails serviceId={serviceId} />
    </View>
  );
};

export default ProductDetailsScreen;
