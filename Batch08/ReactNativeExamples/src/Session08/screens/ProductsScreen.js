/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Product from './components/Product';
const products = [
  {
    id: 1,
    name: 'Kids Dress',
    coverImageUrl:
      'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
    price: 25,
    status: 'In stock',
    color: '#7432C5',
    sizes: ['M', 'L'],
    freeShip: true,
  },
  {
    id: 2,
    name: 'Kids Jumpsuit',
    coverImageUrl:
      'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
    price: 39,
    status: 'In stock',
    color: 'red',
    sizes: ['M', 'L', 'XL'],
    freeShip: false,
  },
];

export default function ProductsScreen({ navigation }) {
  // const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    // call api to get data from remote server
    // then =>
    // setProducts(response.data);
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={products}
        keyExtractor={(item) => {
          return 'product-' + item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetail', { item: item });
              }}>
              <Product data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
