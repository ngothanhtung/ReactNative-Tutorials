/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ServiceDetails from '../../../modules/main/components/SeviceDetails';

const ProductDetailsScreen = ({route}) => {
  const {serviceId} = route.params;

  return <ServiceDetails serviceId={serviceId} />;
};

export default ProductDetailsScreen;
