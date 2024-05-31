import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';

import photos from './data';

type Props = {};

const FlatListExamples = (props: Props) => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <Text style={{ fontWeight: '700' }}>{item.title}</Text>
        <Image source={{ uri: 'https://picsum.photos/300/300.jpg' }} style={{ height: 150, width: 150 }} />
      </View>
    );
  };

  return (
    <View>
      <FlatList data={photos} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </View>
  );
};

export default FlatListExamples;

const styles = StyleSheet.create({});
