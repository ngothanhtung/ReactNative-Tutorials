import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import FONTS from '../../../constants/FONTS';
import { addToCart, decreaseFromCart, emptyCart, removeFromCart } from '../../../modules/Shopping/actions';
import numeral from 'numeral';
import _ from 'lodash';

export default function CartScreen({ navigation }) {
  const addedProducts = useSelector((state) => state.shoppingReducer.addedProducts);
  const dispatch = useDispatch();

  const total = _.sumBy(addedProducts, (item) => {
    return item.product.price * item.quantity;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={addedProducts}
        keyExtractor={(item, index) => `cart-${item.product.id}`}
        renderItem={({ item, index }) => {
          const sum = item.product.price * item.quantity;

          return (
            <View style={styles.container}>
              <View style={styles.productContainer}>
                {/* <Image source={require('@/Mio/components/assets/product-1.jpeg')} /> */}
                <Text style={styles.name}>{item.product.name}</Text>
                <Text style={styles.price}>{numeral(item.product.price).format('0,0$')}</Text>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={styles.sum}>{numeral(sum).format('0,0$')}</Text>
                <Button
                  title='-'
                  onPress={() => {
                    dispatch(decreaseFromCart(item.product.id, 1));
                  }}
                />
                <Button
                  title='+'
                  onPress={() => {
                    dispatch(addToCart(item.product, 1));
                  }}
                />

                <Button
                  title='x'
                  onPress={() => {
                    dispatch(removeFromCart(item.product.id));
                  }}
                />
              </View>
            </View>
          );
        }}
      />

      <View>
        <Text style={styles.total}>Total: {numeral(total).format('0,0$')}</Text>
        <Button
          title='Empty Cart'
          onPress={() => {
            dispatch(emptyCart());
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  productContainer: {
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
  },
  name: {
    fontFamily: FONTS.Gilroy.SemiBold,
    marginHorizontal: 8,
  },
  price: {
    fontFamily: FONTS.Gilroy.SemiBold,
    marginRight: 8,
  },
  quantity: {
    color: 'red',
    fontFamily: FONTS.Gilroy.SemiBold,
    marginRight: 8,
  },
  sum: {
    color: 'blue',
    fontFamily: FONTS.Gilroy.SemiBold,
    marginRight: 8,
  },

  total: {
    fontFamily: FONTS.Gilroy.SemiBold,
    margin: 8,
  },
});
