/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import numeral from 'numeral';
import {useDispatch} from 'react-redux';
import {addToCart} from '../actions';

const products = [
  {id: 1, name: 'iPhone 6', price: 600, discount: '10'},
  {id: 2, name: 'iPhone 7', price: 800, discount: '5'},
  {id: 3, name: 'iPhone 8', price: 1000, discount: '0'},
  {id: 4, name: 'iPhone X', price: 1200, discount: '0'},
];

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});

export default function Products() {
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, marginVertical: 2}}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.text, {fontWeight: '700'}]}>{item.name}</Text>
          </View>
          <View style={{justifyContent: 'center', paddingRight: 8}}>
            <Text style={styles.text}>{numeral(item.price).format('0,0')}</Text>
          </View>

          <View style={{justifyContent: 'center', paddingRight: 8}}>
            <Text style={styles.text}>{item.discount}%</Text>
          </View>
          <TouchableOpacity
            style={{padding: 4}}
            onPress={() => {
              dispatch(addToCart(item, 1));
            }}>
            <Icon name="cart" size={16} color="#0984e3" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={{fontWeight: '700', fontSize: 16}}>Products</Text>
      <View
        style={{backgroundColor: '#b2bec3', height: 1, marginVertical: 4}}
      />
      <FlatList
        style={{marginLeft: 2, marginRight: 2}}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'product-' + index.toString()}
      />
    </View>
  );
}
