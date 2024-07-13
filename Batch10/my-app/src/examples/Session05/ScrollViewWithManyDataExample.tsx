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
            <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1675860538045-fe53a6cb75a8?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ height: 150, width: 150 }} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ScrollViewWithManyDataExample;
