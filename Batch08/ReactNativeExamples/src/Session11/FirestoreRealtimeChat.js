/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider as PaperProvider, TextInput, Button, Appbar, Paragraph, Dialog, Portal, FAB } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e84393',
    accent: '#f1c40f',
  },
};

export default function ChatExample() {
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const send = () => {
    firestore()
      .collection('Messages')
      .add({
        username: username,
        message: message,
        createdTime: firestore.Timestamp.now(),
      })
      .then(() => {
        console.log('Message sent!');
      });
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
            justifyContent: item.username === username ? 'flex-end' : 'flex-start',
          }}>
          {item.username !== username && <Icon name="account" size={24} />}
          <View
            style={{
              padding: 8,
              backgroundColor: item.username === username ? '#0984e3' : '#636e72',
              borderTopLeftRadius: item.username === username ? 8 : 0,
              borderBottomLeftRadius: item.username === username ? 8 : 0,
              borderTopRightRadius: item.username !== username ? 8 : 0,
              borderBottomRightRadius: item.username !== username ? 8 : 0,
            }}>
            <Text style={{ color: 'white' }}>{item.message}</Text>
          </View>

          {item.username === username && <Icon name="account" size={24} />}
        </View>
      </View>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => 'message-' + index}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 4 }} />;
          }}
        />
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 8 }}>
          <TextInput
            style={{ flex: 1, height: 54 }}
            mode="flat"
            underlineColor="transparent"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <View width={4} />
          <TextInput
            style={{ flex: 1, height: 54 }}
            mode="flat"
            underlineColor="transparent"
            value={message}
            onChangeText={(text) => {
              setMessage(text);
            }}
          />

          <Button icon="send" mode="contained" onPress={send} style={{ height: 54, justifyContent: 'center', alignItems: 'center' }} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
