import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

import data from './data';

export default class FlatListExample extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={{ fontWeight: '700' }}>{item.title}</Text>
        <Image source={{ uri: item.thumbnailUrl }} style={{ height: 150, width: 150 }} />
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return 'image-' + item.id;
          }}
        />
      </View>
    );
  }
}
