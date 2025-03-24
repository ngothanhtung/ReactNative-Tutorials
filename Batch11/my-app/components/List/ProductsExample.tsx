import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import axios from 'axios';

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

const ProductsExample = (props: Props) => {
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
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ height: 64, width: 64 }}
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
      />
    </SafeAreaView>
  );
};

export default ProductsExample;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
