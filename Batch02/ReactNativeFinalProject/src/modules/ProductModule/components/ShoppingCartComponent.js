import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Star from '../../../components/Star';
import colors from '../../../constants/colors';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  }
});

export default class ShoppingCartComponent extends Component {
  renderItem({ item }) {
    let price = this.formatCurrency(item.product.price);
    let sum = this.formatCurrency(item.quantity * item.product.price * (100 - item.product.discount) / 100);
    return (
      <View style={{ flex: 1, paddingHorizontal: 8, marginBottom: 24 }}>
        <View style={{ flexDirection: 'row' }}>
          {/* IMAGE */}
          <View style={{ width: (width * 20 / 100), height: (width * 20 / 100) }}>
            <Image resizeMode="cover" source={{ uri: item.product.imageUrl }} style={{ height: '100%', width: '100%' }} />
          </View>
          {/* PRODUCT DETAILS */}
          <View style={{ flex: 1, paddingHorizontal: 6 }}>
            <View>
              <Text style={{ color: '#182C61', fontWeight: '700' }}>{item.product.name}</Text>
            </View>
            {/* PRICE */}
            <View style={{ paddingVertical: 2 }}>
              <Text style={{ color: '#6D214F', fontWeight: '700' }}>US ${item.product.price}</Text>
            </View>
            <View style={{ paddingVertical: 2 }}>
              <Text style={{ color: '#6D214F', fontSize: 12 }}>Discount: {item.product.discount}%</Text>
            </View>
            <View style={{ flex: 1 }}></View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, color: '#2C3A47' }}>
                  Free shipping
                </Text>
              </View>
              {/* QUANTITY */}
              <View style={{ width: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
                <Text style={styles.text}>{item.quantity}</Text>
              </View>
              <View style={{ flex: 0, justifyContent: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.removeFromCart(item.product._id)
                  }}>
                  <Icon name="cart-off" size={18} color={colors.purpleColor} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      // <View style={{ flex: 1 }}>
      //   <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
      //     <View style={{ width: 100, justifyContent: 'center', backgroundColor: 'green' }}>
      //       <Text style={[styles.text, { fontWeight: '700' }]}>Product: {item.product.name}</Text>
      //     </View>
      //     <View style={{ justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
      //       <Text style={styles.text}>{price}</Text>
      //     </View>
      //     <View style={{ width: 40, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
      //       <Text style={styles.text}>{item.product.discount}%</Text>
      //     </View>
      //     <View style={{ width: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
      //       <Text style={styles.text}>{item.quantity}</Text>
      //     </View>
      //     <View style={{ width: 70, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
      //       <Text style={styles.text}>{sum}</Text>
      //     </View>
      //     <View style={{ flex: 0 }}>
      //       <TouchableOpacity
      //         style={{ padding: 6 }}
      //         onPress={() => {
      //           this.props.removeFromCart(item.product.id)
      //         }}>
      //         <Icon name="cart-off" size={16} color="#000000" />
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </View>
    );
  }

  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 8 }}>
        <FlatList
          data={this.props.addedProducts}
          renderItem={(item) => (this.renderItem(item))}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
