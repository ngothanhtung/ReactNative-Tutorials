/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

class CircleButton extends Component {
  render() {
    return (
      <Pressable style={[styles.circleButtonContainer, { backgroundColor: this.props.backgroundColor, borderColor: this.props.borderColor }]}>
        <Text>{this.props.text}</Text>
      </Pressable>
    );
  }
}

class ActionButton extends Component {
  render() {
    return (
      <Pressable style={[styles.actionButtonContainer, { backgroundColor: this.props.backgroundColor }]}>
        <Text style={{ color: this.props.color, fontWeight: '700', fontSize: 12 }}>{this.props.text}</Text>
      </Pressable>
    );
  }
}

export default class Product extends Component {
  render() {
    return (
      <View style={styles.productContainer}>
        <View style={styles.productLeftContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
            }}
          />
        </View>
        <View style={styles.productRightContainer}>
          <View style={styles.productNameContainer}>
            <Text style={{ fontWeight: '700' }}>Kids jumpsuit</Text>
          </View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>$39.00</Text>
            <View style={{ width: 12 }} />
            <Text>In stock</Text>
          </View>
          <View style={styles.productSizeContainer}>
            <CircleButton backgroundColor='#7331C6' borderColor='#7331C6' text='S' />
            <CircleButton backgroundColor='#ffffff' borderColor='#eeeeee' text='M' />
            <CircleButton backgroundColor='#ffffff' borderColor='#eeeeee' text='L' />
          </View>
          <View style={styles.productActionButtonContainer}>
            <ActionButton color='white' backgroundColor='#7331C6' text='Buy now' />
            <ActionButton color='#7331C6' backgroundColor='#eeeeee' text='Add to cart' />
          </View>
          <View style={styles.shippingContainer}>
            <Text style={{ fontSize: 11, color: '#757575' }}>Free shipping on all orders</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    margin: 8,
    flexDirection: 'row',
  },

  productLeftContainer: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    flex: 2,
    backgroundColor: 'white',
    padding: 12,
  },

  productRightContainer: {
    flex: 5,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: 'white',
    padding: 12,
  },

  productNameContainer: { height: 20, backgroundColor: 'white' },

  image: {
    flex: 1,
    borderRadius: 8,
  },

  productPriceContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },

  productPrice: { color: '#7331C6', fontSize: 24, fontWeight: '700' },

  productSizeContainer: {
    paddingVertical: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  productActionButtonContainer: { backgroundColor: 'white', flexDirection: 'row' },
  shippingContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: 4,
  },

  circleButtonContainer: {
    height: 32,
    width: 32,
    borderRadius: 24,

    borderWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionButtonContainer: {
    height: 24,
    width: 100,
    borderRadius: 24,

    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
