import React from 'react';
import { Text, View, SafeAreaView, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import useUsers from './hooks/useUsers';

const renderItem = ({ item, index }: any) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: '700' }}>{item.username}</Text>
      <Text style={{ fontWeight: '700' }}>{item.email}</Text>
    </View>
  );
};

export default function CustomHook() {
  const [loading, users, onRefresh] = useUsers();

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={users}
        keyExtractor={(item, index) => {
          return 'user-' + item._id;
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
