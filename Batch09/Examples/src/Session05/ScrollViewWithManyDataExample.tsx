import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

import photos from './data';

type Props = {};

const ScrollViewWithManyDataExample = (props: Props) => {
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
};

export default ScrollViewWithManyDataExample;
