import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import React from 'react';
import axios from 'axios';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const products = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: 'Product 4',
    image: 'https://picsum.photos/200/300',
  },

  {
    id: 5,
    title: 'Product 5',
    image: 'https://picsum.photos/200/300',
  },

  {
    id: 6,
    title: 'Product 6',
    image: 'https://picsum.photos/200/300',
  },
];

type Props = {};

const PicturesExample = (props: Props) => {
  const [photos, setPhotos] = React.useState(products);
  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const getPhotos = async () => {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/photos');

  //     setPhotos(response.data);
  //   };

  //   getPhotos();
  // }, []);

  const renderItem = (data: any) => {
    const { item, index } = data;

    return (
      <View key={item.id} style={styles.container}>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/600/600' }}
            style={{ height: WIDTH - 24, width: WIDTH - 24 }}
          />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={photos}
        keyExtractor={(item: any, index: number) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={true}
      />
    </SafeAreaView>
  );
};

export default PicturesExample;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
