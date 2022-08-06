import { View, Text, StyleSheet, Image, Dimensions, ViewStyle, Pressable, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import numeral from 'numeral';

// VIETNAMESE CONFIG

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../modules/Shopping/actions';

const WIDTH_SCREEN = Dimensions.get('window').width;

type Props = {
  index: number;
  data: any;
  style: ViewStyle;
};

const Product = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      style={[styles.container, props.style]}
      onPress={() => {
        navigation.navigate('DetailScreen', { productId: props.data.id });
      }}
    >
      <View style={styles.productContainer}>
        <Image source={require('./assets/product-1.jpeg')} style={styles.image} />
        <View style={styles.textContainer}>
          {/* INFORMATION */}
          <Text style={styles.name}>{props.data.name}</Text>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{props.data.desc}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.price}>{numeral(props.data.price).format('0,0 $')}</Text>
              <Text style={styles.oldPrice}>{numeral(props.data.oldPrice).format('0,0 $')}</Text>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                // Alert.alert('Online Store', 'Coming soon');
                dispatch(addToCart(props.data, 1));
              }}
            >
              <Feather name='shopping-cart' size={24} color='white' />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },

  productContainer: {
    width: (WIDTH_SCREEN - 36) / 2,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  textContainer: {
    padding: 12,
  },

  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: (WIDTH_SCREEN - 36) / 2,
    width: (WIDTH_SCREEN - 36) / 2,
  },

  name: {
    fontFamily: 'SVN-Gilroy-Medium',
    fontSize: 18,
  },

  descContainer: {
    paddingVertical: 8,
    minHeight: 72,
  },

  desc: {
    fontFamily: 'SVN-Gilroy-Regular',
    lineHeight: 18,
  },

  price: {
    fontFamily: 'SVN-Gilroy-SemiBold',
    color: '#EE234C',
    fontSize: 22,
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#636e72',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
    width: 48,
    backgroundColor: '#EE234C',
  },
});
