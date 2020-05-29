import React from 'react';
import {View, Text, Button} from 'react-native';

const ProductsScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="iPhone X"
        onPress={() => {
          navigation.navigate('ProductDetailsScreen', {name: 'iPhone X'});
        }}
      />
      <Button
        title="Samsung Note 10"
        onPress={() => {
          navigation.navigate('ProductDetailsScreen', {
            name: 'Samsung Note 10',
          });
        }}
      />
    </View>
  );
};

export default ProductsScreen;
