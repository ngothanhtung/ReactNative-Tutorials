import React from 'react';
import {View, Text, Image} from 'react-native';

const ProductDetailsScreen = ({route, navigation}) => {
  const {product} = route.params;
  console.log(product);
  return (
    <View style={{flex: 1}}>
      <Image source={{uri: product.pictureUrl}} style={{height: 300}} />
    </View>
  );
};

export default ProductDetailsScreen;
