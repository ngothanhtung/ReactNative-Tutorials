/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Button, ActivityIndicator, FlatList } from 'react-native';
import usePhoto from './usePhoto';

export default function CustomHookExample() {
  const [loading, photos, onRefresh] = usePhoto();

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={photos}
        keyExtractor={(item, index) => 'photo-' + index}
        renderItem={({ item, index }) => {
          return (
            <View style={{ height: 240, padding: 8 }}>
              <Image source={{ uri: item.download_url }} style={{ width: '100%', height: '100%', borderRadius: 8 }} resizeMode="cover" />
            </View>
          );
        }}
      />
      <Button title="Refresh" onPress={onRefresh} />
    </View>
  );
}
