import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShoppingCartScreen = () => {
  const addedServices = useSelector(
    (state) => state.main.shoppingCart.addedServices,
  );
  console.log(addedServices);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Shopping Cart</Text>
      {addedServices.map((item, index) => {
        return (
          <View style={{ flexDirection: 'row' }} key={index}>
            <Text>{item.service.name}</Text>
            <Text>{item.service.price}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
