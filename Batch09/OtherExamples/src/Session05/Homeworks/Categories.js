import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';

import categories from './data/categories';

export default class Categories extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.button}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ padding: 24 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return 'category-' + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 128,
    borderRadius: 10,
    backgroundColor: '#FF6C44',
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 24,
    width: 24,
    marginRight: 8,
  },

  text: {
    color: 'white',
    fontWeight: '700',
  },
});
