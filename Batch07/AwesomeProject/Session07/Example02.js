import React from 'react';
import {View, Text, FlatList, Image, RefreshControl} from 'react-native';

const Example01 = () => {
  const [loading, setLoading] = React.useState(false);
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);

  const getPhotos = () => {
    setLoading(true);
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPhotos(json);
        console.log(json);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  React.useEffect(getPhotos, [refreshCount]);

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
      <FlatList
        data={photos}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setRefreshCount(refreshCount + 1);
            }}
          />
        }
      />
    </View>
  );
};

export default Example01;
