/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Product from './components/Product2';
import axios from 'axios';

const width = Dimensions.get('screen').width;

const url = 'https://developer.aptech.io/products';

export default function ProductsScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 8,
      }}>
      {loading && <ActivityIndicator />}

      <FlatList
        data={products}
        keyExtractor={(item) => {
          return 'product-' + item.id;
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ width: width / 2 - 8 }}
              onPress={() => {
                navigation.navigate('ProductDetail', { data: item });
              }}>
              <Product data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
