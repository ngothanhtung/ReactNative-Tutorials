import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import Product from './Product';

type Props = {};

const products = [
  {
    id: 'P-099876',
    name: 'Thịt tươi sống',
    desc: 'Giao hàng dự kiến trong 02 giờ',
    oldPrice: 54000,
    price: 46000,
  },
  {
    id: 'P-109878',
    name: 'Thịt vai',
    desc: 'Giao hàng dự kiến trong 02 giờ',
    oldPrice: 64000,
    price: 54000,
  },
  {
    id: 'P-123432',
    name: 'Thịt sườn',
    desc: 'Giao hàng dự kiến trong 02 giờ',
    oldPrice: 74000,
    price: 58000,
  },
  {
    id: 'P-090987',
    name: 'Thịt mông',
    desc: 'Giao hàng dự kiến trong 02 giờ',
    oldPrice: 74000,
    price: 58000,
  },
];

const Products = (props: Props) => {
  const renderItem = ({ item, index }) => {
    return <Product data={item} index={index} style={{ paddingLeft: index % 2 === 0 ? 12 : 0 }} />;
  };
  return (
    <View>
      <FlatList data={products} keyExtractor={(item, index) => `product-${item.id}`} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default Products;
