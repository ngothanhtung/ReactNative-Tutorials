/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, Text, FlatList, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Appbar } from 'react-native-paper';

export default function ChatScreen({ route, navigation }) {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const { userName } = route.params;

  const send = () => {
    firestore()
      .collection('Messages')
      .add({
        username: userName,
        message: message,
        createdTime: firestore.Timestamp.now(),
      })
      .then(() => {
        console.log('Message sent!');
      });
    setMessage('');
  };

  const onResult = (querySnapshot) => {
    const data = [];

    // lặp qua từng document
    querySnapshot.forEach((documentSnapshot) => {
      const m = documentSnapshot.data();
      m.id = documentSnapshot.id;
      data.push(m);
    });
    // set state

    setMessages(data);
  };

  const onError = (error) => {
    console.error(error);
  };

  React.useEffect(() => {
    // componentDidMount
    const subscriber = firestore()
      .collection('Messages')
      // Sắp xếp asc / desc
      .orderBy('createdTime', 'asc')
      .onSnapshot(onResult, onError);

    // componentWillUnmount
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            margin: 4,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: item.username === userName ? 'flex-end' : 'flex-start',
          }}>
          {item.username !== userName && <Icon name="account" size={24} />}
          <View
            style={{
              padding: 8,
              backgroundColor: item.username === userName ? '#0984e3' : '#636e72',
              borderTopLeftRadius: item.username === userName ? 8 : 0,
              borderBottomLeftRadius: item.username === userName ? 8 : 0,
              borderTopRightRadius: item.username !== userName ? 8 : 0,
              borderBottomRightRadius: item.username !== userName ? 8 : 0,
            }}>
            <Text style={{ color: 'white' }}>{item.message}</Text>
          </View>

          {item.username === userName && <Icon name="account" size={24} />}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Chat" subtitle={'User: ' + userName} />
      </Appbar.Header>
      <View style={{ height: 24 }} />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => 'message-' + index}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 4 }} />;
        }}
      />
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <TextInput
          style={{
            flex: 1,
            height: 48,
            backgroundColor: 'white',
            paddingHorizontal: 24,
          }}
          mode="container"
          placeholder="Enter your message"
          underlineColor="transparent"
          value={message}
          onChangeText={(text) => {
            setMessage(text);
          }}
          onEndEditing={send}
        />

        <Button
          icon="send"
          mode="text"
          onPress={send}
          contentStyle={{
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
