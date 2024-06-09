import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {
  navigation: any;
  route: any;
};

const url = 'https://server.aptech.io/online-shop/products';

const ProductDetailsScreen = ({ navigation, route }: Props) => {
  const [product, setProduct] = React.useState<any>(null);

  const id = route.params.id;
  const name = route.params.name;

  React.useEffect(() => {
    axios.get(url + '/' + id).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={{
          uri: 'https://images.samsung.com/is/image/samsung/p6pim/vn/ua58au7000kxxv/gallery/vn-uhd-au7000-380957-ua58au7000kxxv-428307158?$1300_1038_PNG$',
        }}
      />

      <View style={styles.informationContainer}>
        <Text>{product?.name}</Text>
        <Text>Giá: {product?.price}</Text>
        <Text>Giá mới: {(product?.price * (100 - product?.discount)) / 100}</Text>
        <Text>Giảm giá: {product?.discount}%</Text>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  informationContainer: {
    padding: 24,
    gap: 6,
  },

  image: {
    width: '100%',
    height: 300,
  },
});
