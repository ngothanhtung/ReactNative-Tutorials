/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const ActionButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0984e3',
        borderRadius: 6,
      }}>
      <Icon name="shopping-cart" color="white" size={16} />
    </TouchableOpacity>
  );
};

function Product({ data }) {
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
      }}>
      <Image
        style={{
          height: 160,
          width: '100%',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        resizeMode="cover"
        source={{
          uri: data.imageUrl,
        }}
      />
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          backgroundColor: 'white',
        }}>
        <Text style={{ fontWeight: '700' }}>{data.name}</Text>
        <View height={4} />
        {/* <Text style={{ fontWeight: '400', color: 'grey', fontSize: 12 }}>{data.category.name}</Text> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}>
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 24 }}>
          <Text style={{ fontWeight: '700', color: 'black' }}>{data.price} $</Text>
        </View>
        <View
          style={{
            paddingRight: 12,
            paddingVertical: 12,
          }}>
          <ActionButton />
        </View>
      </View>
    </View>
  );
}

export default function FirestoreProducts() {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const getProducts = () => {
    const data = [];
    firestore()
      .collection('Products')
      // Sắp xếp asc / desc
      .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          data.push(item);
        });
        // set state
        setLoading(false);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setProducts([]);
      });
  };

  React.useEffect(getProducts, []);

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => 'product-' + item.id}
        renderItem={({ item }) => {
          return <Product data={item} />;
        }}
      />
    </SafeAreaView>
  );
}
