import React from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
// Use custom hook
import useMyHook from './useMyHook';

const Example04 = () => {
  const [loading, photos, refresh] = useMyHook(false, []);

  const renderItem = ({item}) => {
    return (
      <Image
        source={{uri: item.download_url}}
        style={{height: 300, width: '100%'}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={photos}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
      />
    </View>
  );
};

export default Example04;
