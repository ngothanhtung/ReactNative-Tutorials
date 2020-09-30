/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import numeral from 'numeral';

import { removeFromCart } from '../../actions';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});

export default function ShoppingCarts() {
  const dispatch = useDispatch();
  const addedServices = useSelector(
    (state) => state.main.shoppingCart.addedServices,
  );

  const getTotal = () => {
    let result = addedServices.reduce(
      (total, item) =>
        total +
        (item.service.price * item.quantity * (100 - item.service.discount)) /
          100,
      0,
    );
    return numeral(result).format('0,0');
  };

  const renderItem = ({ item }) => {
    let price = numeral(item.service.price).format('0,0');
    let sum = numeral(
      (item.quantity * item.service.price * (100 - item.service.discount)) /
        100,
    ).format('0,0');

    return (
      <View style={{ flex: 1, marginVertical: 2 }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.text, { fontWeight: '700' }]}>
              {item.service.name}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 8,
            }}>
            <Text style={styles.text}>{price}</Text>
          </View>
          <View
            style={{
              width: 40,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 8,
            }}>
            <Text style={styles.text}>{item.service.discount}%</Text>
          </View>
          <View
            style={{
              width: 30,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 8,
            }}>
            <Text style={styles.text}>{item.quantity}</Text>
          </View>
          <View
            style={{
              width: 70,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 8,
            }}>
            <Text style={styles.text}>{sum}</Text>
          </View>
          <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => {
              dispatch(removeFromCart(item.service.id));
            }}>
            <Icon name="cart-off" size={16} color="#d63031" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ padding: 12 }}>
      <FlatList
        style={{ marginLeft: 2, marginRight: 2 }}
        data={addedServices}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'cart-' + index.toString()}
      />

      <View
        style={{ backgroundColor: '#b2bec3', height: 1, marginVertical: 4 }}
      />
      <Text style={{ fontWeight: '700', color: '#d63031', textAlign: 'right' }}>
        Total: {getTotal()}
      </Text>
    </View>
  );
}
