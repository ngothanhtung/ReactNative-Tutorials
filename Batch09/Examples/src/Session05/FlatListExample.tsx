import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';

import photos from './data';

type Props = {};

const FlatListExample = (props: Props) => {
  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => {
          return 'image-' + item.id;
        }}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text style={{ fontWeight: '700' }}>{item.title}</Text>
              <Image source={{ uri: item.thumbnailUrl }} style={{ height: 150, width: 150 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListExample;
