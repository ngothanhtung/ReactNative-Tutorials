/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import photos from './data';

export default class ScrollViewWithManyDataExample extends Component {
  render() {
    return (
      <ScrollView>
        {photos.map((item, index) => {
          return (
            <View key={item.id}>
              <Text style={{ fontWeight: '700' }}>{item.title}</Text>
              <Image source={{ uri: item.thumbnailUrl }} style={{ height: 150, width: 150 }} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
