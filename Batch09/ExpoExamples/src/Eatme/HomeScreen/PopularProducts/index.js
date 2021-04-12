import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Product from './Product';
import products from './data';

export default class PopularProducts extends Component {
  renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <View>
        <Product name={item.name} description={item.description} price={item.price} calories={item.calories} />
      </View>
    );

    // ;
  };

  render() {
    return (
      <View style={{ marginTop: 24, marginLeft: 24 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return 'product-' + item.id;
          }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        />
      </View>
    );
  }
}
