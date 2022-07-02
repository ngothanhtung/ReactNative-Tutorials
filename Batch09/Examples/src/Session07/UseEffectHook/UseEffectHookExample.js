import React from 'react';
import { Text, View, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import axios from 'axios';

const url = 'https://training.softech.cloud/api/products';

const renderItem = ({ item, index }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontWeight: '700' }}>{item.name}</Text>
      <Text style={{ fontWeight: '700' }}>${item.price}</Text>
    </View>
  );
};

export default function UseEffectHookExample() {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setProducts(result.data.products);
        setLoading(false);
        console.log('DONE');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => {
          return 'product-' + item.id;
        }}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 8 }} />;
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setRefresh(refresh + 1);
            }}
          />
        }
      />
    </SafeAreaView>
  );
}
