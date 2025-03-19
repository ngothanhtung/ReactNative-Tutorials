// Tóm tắt:
// Component dùng useEffect để thực hiện các tác vụ sau:
// - Lấy dữ liệu từ API: Chạy 1 lần khi component được khởi tạo
// - Cập nhật lại state
// - Thực hiện các tác vụ khác khi component được khởi tạo hoặc cập nhật
// - Chạy hàm khi component được khởi tạo và mỗi lần component được cập nhật (state)
// - Chạy hàm khi component được khởi tạo và mỗi lần component được cập nhật (props)

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

type Props = {
  number: number;
};

const Example1 = ({ number }: Props) => {
  const [count, setCount] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  const [refresh, setRefresh] = React.useState(0);

  // Lifecycle
  // Mounting: Là khi component được khởi tạo
  // [] để trống là khi component được khởi tạo và chỉ chạy 1 lần
  React.useEffect(() => {
    console.log('Component mounted');
    // Dùng khi làm việc với API: Lấy dữ liệu từ API
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      console.log('response', response.data);
    };

    getProducts();
  }, []);

  // Chỉ chạy khi component được khởi tạo và khi refresh thay đổi
  React.useEffect(() => {
    console.log('Component updated with refresh', refresh);
  }, [refresh]);

  // Chạy khi component được khởi tạo và mỗi lần component được cập nhật
  React.useEffect(() => {
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  // Chạy khi component được khởi tạo và mỗi lần component được cập nhật

  return (
    <ScrollView style={styles.container}>
      {products.map((item: any, index) => {
        return (
          <View key={index} style={styles.productContainer}>
            <Text style={{ fontWeight: '700' }}>{item.title}</Text>
            <Text>Price: {item.price}</Text>
            {/* <Text>{item.description}</Text> */}
          </View>
        );
      })}

      <Text>Example1</Text>
      <Button
        title='Increase'
        onPress={() => {
          setCount(count + 1);
          setRefresh(refresh + 1);
        }}
      />
      <Text>{count}</Text>
    </ScrollView>
  );
};

export default Example1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  productContainer: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
