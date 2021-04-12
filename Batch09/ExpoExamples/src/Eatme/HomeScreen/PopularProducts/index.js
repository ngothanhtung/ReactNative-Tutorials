import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Product from './Product';
import products from './data';
import GilroyText from '../../components/GilroyText';

export default class PopularProducts extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View style={{ marginRight: 16 }}>
        <Product name={item.name} description={item.description} price={item.price} calories={item.calories} />
      </View>
    );
  };

  render() {
    return (
      <View style={{ marginTop: 24, marginLeft: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <GilroyText style={{ marginBottom: 16, fontSize: 16, color: '#111A2C' }} fontStyle='Bold'>
            Popular Near You
          </GilroyText>

          <GilroyText style={{ marginRight: 24, marginBottom: 16, fontSize: 14, color: '#FF6C44' }} fontStyle='Medium'>
            Show all
          </GilroyText>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return 'product-' + item.id;
          }}
        />
      </View>
    );
  }
}
