import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import apiClient from './apiClient';

type Props = {};

const BasicExample = (props: Props) => {
  const [products, setProducts] = React.useState([]);
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    // Get user from AsyncStorage
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user !== null) {
          console.log('User:', JSON.parse(user));
        }
      } catch (error) {
        console.error('Error retrieving user:', error);
      }
    };
    getUser();
  }, []);

  React.useEffect(() => {
    // const getProducts = () => {
    //   apiClient
    //     .get('/products')
    //     .then((response) => {
    //       console.log('Products');
    //       // setProducts(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching products:', error);
    //     });

    //   apiClient
    //     .get('/customers')
    //     .then((response) => {
    //       // setProducts(response.data);
    //       console.log('Customers');
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching products:', error);
    //     });

    //   console.log('Done');
    // };
    const getProducts = async () => {
      try {
        const response = await apiClient.get('/online-shop/products');
        console.log('Products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const getCustomers = async () => {
      try {
        const response = await apiClient.get('/online-shop/customers');
        console.log('Customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
    getCustomers();
    console.log('Done');
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.discount}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={customers}
        keyExtractor={(item, index) => `product-${index}`}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
    </SafeAreaView>
  );
};

export default BasicExample;

const styles = StyleSheet.create({});
