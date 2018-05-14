import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  }
});

export default class ShoppingCartComponent extends Component {
  renderItem = ({ item }) => {
    let price = this.formatCurrency(item.product.price);
    let sum = this.formatCurrency(item.quantity * item.product.price * (100 - item.product.discount) / 100);
    return (
      <View style={{ flex: 1, marginVertical: 2 }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.text, { fontWeight: '700' }]}>{item.product.name}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
            <Text style={styles.text}>{price}</Text>
          </View>
          <View style={{ width: 40, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
            <Text style={styles.text}>{item.product.discount}%</Text>
          </View>
          <View style={{ width: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
            <Text style={styles.text}>{item.quantity}</Text>
          </View>
          <View style={{ width: 70, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
            <Text style={styles.text}>{sum}</Text>
          </View>
          <TouchableOpacity
            style={{ padding: 6 }}
            onPress={() => {
              this.props.removeFromCart(item.product.id)
            }}>
            <Icon name="cart-off" size={16} color="#d63031" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  render() {
    return (
      this.props.shoppingCartVisible &&
      <View>
        <View style={{ flexDirection: 'row', backgroundColor: '#d63031', padding: 4 }}>
          <View>
            <TouchableOpacity onPress={() => {
              this.props.hideShoppingCart();
            }}>
              <Icon name="close-circle" size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 6 }}>
            <Text style={{ fontWeight: '700', color: '#ffffff' }}>My Cart</Text>
          </View>

        </View>

        <ScrollView style={{ padding: 6 }}>
          <FlatList style={{ marginLeft: 2, marginRight: 2 }}
            data={this.props.addedProducts}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
