/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import numeral from 'numeral';

import colors from '../../../../constants/colors';
import { removeFromCart, clearCart } from '../../actions';
import FirestoreService from '../../../../services/FirestoreService';
import moment from 'moment';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: colors.PRIMARY_FONT,
  },
});

export default function ShoppingCarts() {
  const dispatch = useDispatch();
  const signedInUser = useSelector((state) => state.auth.signedInUser);

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
            <Text style={styles.text}>{sum} đ</Text>
          </View>
          <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => {
              dispatch(removeFromCart(item.service.id));
            }}>
            <Icon name="cart-off" size={16} color={colors.DARK_RED} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: 'white' }}>
      <FlatList
        data={addedServices}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'cart-' + index.toString()}
      />
      <View>
        <View
          style={{
            backgroundColor: colors.PRIMARY_BORDER,
            height: 1,
            marginVertical: 4,
          }}
        />
        <Text
          style={{
            fontWeight: '700',
            color: colors.PRIMARY,
            textAlign: 'right',
          }}>
          Tổng cộng: {getTotal()} đ
        </Text>

        <View style={{ height: 12 }} />

        <View style={{ height: 12 }} />

        <Button
          mode="contained"
          onPress={() => {
            // Create order
            FirestoreService.createOrder({
              createdDate: firestore.Timestamp.now(),
              schedule: moment().add(1, 'd'),
              services: addedServices,
              status: 'confirmed',
              uid: signedInUser.uid,
            }).then((createdOrder) => {
              // Clear cart
              dispatch(clearCart());
              // TODO: Navigate to other screen.
            });
          }}>
          Xác nhận đơn hàng
        </Button>
      </View>
    </View>
  );
}
