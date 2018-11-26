import React, { Component } from 'react'
import { Text, View, Button, AsyncStorage, FlatList } from 'react-native'

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItems: []
    }
  }
  componentWillMount() {
    AsyncStorage.getItem('shopping-cart').then((data) => {
      if (data) {
        this.setState({ shoppingCartItems: JSON.parse(data) });
        console.log(this.state.shoppingCartItems);
      }
    })
  }

  getTotal() {
    var total = 0;
    for (var i = 0; i < this.state.shoppingCartItems.length; i++) {
      var item = this.state.shoppingCartItems[i];
      total = total + (item.quantity * item.product.price * (100 - item.product.discount) / 100);
    }
    return total;
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          data={this.state.shoppingCartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            (
              <View style={{ flexDirection: 'row', padding: 4 }}>
                <Text style={{ flex: 1 }}>
                  {item.product.name}
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>
                  {item.product.price}
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>
                  {item.product.discount}%
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>
                  {item.quantity}
                </Text>
                <Text style={{ paddingHorizontal: 4 }}>
                  {item.quantity * item.product.price * (100 - item.product.discount) / 100}
                </Text>
              </View>
            )
          }
        />
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: '700', fontSize: 24, color: 'red' }}>
            {this.getTotal()}
          </Text>
        </View>


        <Button title="Clear" onPress={() => {
          AsyncStorage.removeItem('shopping-cart');
        }} />

      </View>
    )
  }
}