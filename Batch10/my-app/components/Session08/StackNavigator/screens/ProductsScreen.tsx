import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {
  navigation: any;
};

const url = 'https://server.aptech.io/online-shop/products';

const ProductsScreen = ({ navigation }: Props) => {
  const [products, setProducts] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            id: item.id,
            name: item.name,
          });
        }}
      >
        <View>
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{
              uri: 'https://images.samsung.com/is/image/samsung/p6pim/vn/ua58au7000kxxv/gallery/vn-uhd-au7000-380957-ua58au7000kxxv-428307158?$1300_1038_PNG$',
            }}
          />
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.discount}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderItem} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => <View style={styles.separator} />} />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },

  productContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    padding: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  separator: {
    height: 12,
  },

  image: {
    width: 120,
    height: 80,
  },
});
