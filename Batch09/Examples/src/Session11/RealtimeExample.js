import { View, Text } from 'react-native';
import React from 'react';
import { db } from './initializeApp';

import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
// Initialize Cloud Firestore and get a reference to the service

const RealtimeExample = () => {
  const [products, setProducts] = React.useState([]);

  // Get docs
  React.useEffect(() => {
    function initRealtime() {
      const q = query(collection(db, 'products'), where('stock', '>', 0));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        setProducts(result);
      });

      return unsubscribe;
    }

    const unsubscribe = initRealtime();

    // Unmouting
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Realtime Example</Text>

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

export default RealtimeExample;
