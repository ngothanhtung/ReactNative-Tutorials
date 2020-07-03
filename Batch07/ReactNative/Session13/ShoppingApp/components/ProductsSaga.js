import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import {getProducts} from '../actions';

export default function ProductsSaga() {
  const dispatch = useDispatch();
  // const [count, setCount] = React.useState(0);
  const products = useSelector((state) => state.shoppingReducer.products);
  const loading = useSelector((state) => state.shoppingReducer.loading);

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => 'product-' + index}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
