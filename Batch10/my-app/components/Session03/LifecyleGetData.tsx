import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const url = 'https://server.aptech.io/online-shop/products';

type Props = {};

const LifecyleGetData = (props: Props) => {
  const [products, setProducts] = React.useState([]);
  // Chạy 1 lần duy nhất khi component được render / mount
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      {products.map((product: any, index: number) => (
        <View key={index}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LifecyleGetData;
