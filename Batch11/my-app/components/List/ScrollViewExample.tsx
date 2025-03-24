import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import axios from 'axios';

type Props = {};

const ScrollList = (props: Props) => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getPhotos = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

      setPhotos(response.data);
    };

    getPhotos();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {photos.map((photo: any, index: number) => {
          return (
            <View key={photo.id} style={styles.container}>
              <View>
                <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ height: 64, width: 64 }} />
              </View>
              <View>
                <Text>{photo.title}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollList;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
