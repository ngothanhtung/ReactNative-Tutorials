/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import firestore from '@react-native-firebase/firestore';

export default function FireStoreRealtimeExample() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  const onResult = (querySnapshot) => {
    const data = [];
    console.log('Got Users collection result.');
    // lặp qua từng document
    querySnapshot.forEach((documentSnapshot) => {
      const user = documentSnapshot.data();
      user.id = documentSnapshot.id;
      data.push(user);
    });
    // set state
    setLoading(false);
    setUsers(data);
  };

  const onError = (error) => {
    console.error(error);
  };

  React.useEffect(() => {
    // componentDidMount
    const subscriber = firestore()
      .collection('Users')
      // Sắp xếp asc / desc
      .orderBy('name', 'asc')
      .onSnapshot(onResult, onError);

    // componentWillUnmount
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const renderItem = ({item}) => {
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
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 12}}>
      {loading && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!loading && (
        <React.Fragment>
          <Text>Firestore Realtime Example</Text>
          <View
            style={{height: 1, backgroundColor: 'gray', marginVertical: 12}}
          />
          <FlatList
            data={users}
            keyExtractor={(item, index) => 'user-' + index}
            renderItem={renderItem}
            ItemSeparatorComponent={() => {
              return <View style={{height: 4}} />;
            }}
          />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}
