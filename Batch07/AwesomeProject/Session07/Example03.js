import React from 'react';
import {View, Text, FlatList, Image, RefreshControl} from 'react-native';

import {getPhotos} from './Helpers';

const Example01 = () => {
  const [loading, setLoading] = React.useState(false);
  const [refreshCount, setRefreshCount] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);

  const getData = () => {
    setLoading(true);
    getPhotos()
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  //jshjsdhsjhd
  React.useEffect(getData, [refreshCount]);

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
