import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default class ShoppingCartComponent extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 2 }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700' }}>{item.product.name}</Text>
          </View>
          <View style={{ justifyContent: 'center', paddingRight: 8 }}>
            <Text>${item.product.price}</Text>
          </View>
          <View style={{ justifyContent: 'center', paddingRight: 8 }}>
            <Text>{item.quantity}</Text>
          </View>
          <View style={{ backgroundColor: '#0984e3', padding: 8 }}>
            <TouchableOpacity onPress={() => {
              this.props.increaseCount(1)
            }}>
              <Text style={{ color: '#ffffff' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Shopping Carts</Text>
        <View style={{ backgroundColor: '#2d3436', height: 1 }} />
        <ScrollView>
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
