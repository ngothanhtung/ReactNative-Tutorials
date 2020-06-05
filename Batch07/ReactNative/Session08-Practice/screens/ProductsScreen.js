import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  productImage: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: HEIGHT / 6,
  },
  productNameContainer: {
    padding: 16,
  },
  productName: {
    fontWeight: '700',
    fontSize: 15,
  },

  productDescription: {
    fontWeight: '400',
    fontSize: 12,
  },
});

const ProductsScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('https://api.softech.cloud/products').then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(getProducts, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => {
          navigation.navigate('ProductDetailsScreen', {product: item});
        }}>
        <Image source={{uri: item.pictureUrl}} style={styles.productImage} />
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productName}>{item.price}</Text>
          <Text style={styles.productName}>{item.discount}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={products}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        numColumns={2}
        key={1}
      />
    </View>
  );
};

export default ProductsScreen;
