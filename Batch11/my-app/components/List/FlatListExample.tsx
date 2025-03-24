import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {};

const FlatListExample = (props: Props) => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getPhotos = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

      setPhotos(response.data);
    };

    getPhotos();
  }, []);

  const renderItem = (data: any) => {
    const { item, index } = data;

    return (
      <View key={item.id} style={styles.container}>
        <View>
          <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ height: 64, width: 64 }} />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={photos} keyExtractor={(item: any, index: number) => item.id} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
