import { View, Text, Button } from 'react-native';
import React from 'react';
import { db } from './initializeApp';

import { setDoc, getDoc, getDocs, collection, query, where, doc } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
// Initialize Cloud Firestore and get a reference to the service

const FirestoreExample = () => {
  const [products, setProducts] = React.useState([]);
  // Get a doc
  React.useEffect(() => {
    async function getProduct() {
      const docRef = doc(db, 'products', 'product-1');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    }

    getProduct();
  }, []);

  // Get docs
  React.useEffect(() => {
    async function getProducts() {
      // Get docs
      const productsRef = collection(db, 'products');
      // Get all
      // const q = query(productsRef);

      // Get with where
      const q = query(productsRef, where('stock', '>', 0));
      const querySnapshot = await getDocs(q);

      let result = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        result.push(doc.data());
        // console.log(doc.id, ' => ', doc.data());
      });

      setProducts(result);
    }

    getProducts();
  }, []);

  return (
    <View>
      <Text>FirestoreExample</Text>
      <Button
        title='Save'
        onPress={() => {
          const productRef = doc(db, 'products', 'product-1');
          const product = { price: 1150 };
          setDoc(productRef, product, { merge: true });
        }}
      />
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FirestoreExample;
