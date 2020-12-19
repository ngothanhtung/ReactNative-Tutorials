/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, FlatList, SafeAreaView, ActivityIndicator, Alert, TouchableOpacity, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

export default function FireStoreExample() {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  const getUsers = () => {
    const data = [];
    firestore()
      .collection('Users')
      // Sắp xếp asc / desc
      .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) => {
        // lặp qua từng document
        querySnapshot.forEach((documentSnapshot) => {
          const user = documentSnapshot.data();
          user.id = documentSnapshot.id;
          data.push(user);
        });
        // set state
        setLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Something is wrong!');
        setLoading(false);
        setUsers([]);
      });
  };

  // Add a user
  const addUser = () => {
    firestore()
      .collection('Products')
      .add({
        name: 'iPhone 12',
        price: 1200,
        status: 'In stock',
        discount: 5,
        imageUrl:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000',
        colors: ['Gold', 'Green', 'Pink'],
      })
      .then(() => {
        console.log('User added!');
        setRefresh(refresh + 1);
      });
  };

  // Add a user
  const removeUser = (id) => () => {
    firestore()
      .collection('Users')
      .doc(id)
      .delete()
      .then(() => {
        console.log('User removed!');
        setRefresh(refresh + 1);
      });
  };

  React.useEffect(getUsers, [refresh]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="account" size={24} />

        <View
          style={{
            marginLeft: 4,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>{item.name}</Text>
          <TouchableOpacity onPress={removeUser(item.id)}>
            <Icon name="delete" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )}
      {!loading && (
        <React.Fragment>
          <Text>Firestore Example</Text>
          <Button title="Add user" onPress={addUser} />
          <FlatList
            data={users}
            keyExtractor={(item, index) => 'user-' + index}
            renderItem={renderItem}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 4 }} />;
            }}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={() => setRefresh(refresh + 1)} />}
          />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}
