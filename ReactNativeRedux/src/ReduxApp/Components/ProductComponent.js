import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const products = [
  { id: 1, name: 'iPhone 6', price: 600, discount: '10' },
  { id: 2, name: 'iPhone 7', price: 800, discount: '5' },
  { id: 3, name: 'iPhone 8', price: 1000, discount: '0' },
]

export default class ProductComponent extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 2 }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700' }}>{item.name}</Text>
          </View>
          <View style={{ justifyContent: 'center', paddingRight: 8 }}>
            <Text>${item.price}</Text>
          </View>
          <View style={{ backgroundColor: '#0984e3', padding: 8 }}>
            <TouchableOpacity onPress={() => {
              this.props.addToCart(item, 1)
            }}>
              <Text style={{ color: '#ffffff' }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Products</Text>
        <View style={{ backgroundColor: '#2d3436', height: 1 }} />
        <ScrollView>
          <FlatList style={{ marginLeft: 2, marginRight: 2 }}
            data={products}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
