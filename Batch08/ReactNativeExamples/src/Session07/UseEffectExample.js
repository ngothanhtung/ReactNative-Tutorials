/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Button, ActivityIndicator, FlatList } from 'react-native';

export default function UseEffectExample() {
  // const [count, setCount] = React.useState(0);
  let [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  // ComponentDidmMount + ComponentWillUnmount
  React.useEffect(() => {
    // ComponentDidMount
    setLoading(true);

    // Get data from remote api
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        console.log(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // ComponentWillUnmount
    return () => {};
  }, [refresh]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={photos}
        keyExtractor={(item, index) => 'photo-' + index}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image source={{ uri: item.url }} style={{ width: '100%', height: 300 }} />
            </View>
          );
        }}
      />
      <Button
        title="Refresh"
        onPress={() => {
          setRefresh(refresh++);
        }}
      />
    </View>
  );
}
