import React from 'react';
import { Text, View, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import useProducts from './useProducts';

const renderItem = ({ item, index }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: '700' }}>{item.name}</Text>
      <Text style={{ fontWeight: '700' }}>${item.price}</Text>
    </View>
  );
};

export default function CustomHookExample() {
  const [loading, products, onRefresh] = useProducts();

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={products}
        keyExtractor={(item, index) => {
          return 'product-' + item.id;
        }}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 8 }} />;
        }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
