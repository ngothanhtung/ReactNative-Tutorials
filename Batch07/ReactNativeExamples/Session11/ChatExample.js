/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, FlatList, SafeAreaView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
  Button,
  Appbar,
  Paragraph,
  Dialog,
  Portal,
  FAB,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#e84393',
    // accent: '#f1c40f',
  },
};

export default function ChatExample() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const send = () => {
    firestore()
      .collection('Messages')
      .add({
        username: Platform.OS,
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

  const renderItem = ({item}) => {
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
            justifyContent:
              item.username === Platform.OS ? 'flex-end' : 'flex-start',
          }}>
          {item.username !== Platform.OS && <Icon name="account" size={24} />}
          <View
            style={{
              padding: 8,
              backgroundColor:
                item.username === Platform.OS ? '#0984e3' : '#636e72',
              borderTopLeftRadius: item.username === Platform.OS ? 8 : 0,
              borderBottomLeftRadius: item.username === Platform.OS ? 8 : 0,
              borderTopRightRadius: item.username !== Platform.OS ? 8 : 0,
              borderBottomRightRadius: item.username !== Platform.OS ? 8 : 0,
            }}>
            <Text style={{color: 'white'}}>{item.message}</Text>
          </View>

          {item.username === Platform.OS && <Icon name="account" size={24} />}
        </View>
      </View>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Chat" subtitle="With my friend" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} />
        </Appbar.Header>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => 'message-' + index}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return <View style={{height: 4}} />;
          }}
        />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TextInput
            style={{flex: 1, height: 54}}
            mode="flat"
            underlineColor="transparent"
            value={message}
            onChangeText={(text) => {
              setMessage(text);
            }}
          />

          <Button
            icon="send"
            mode="contained"
            onPress={send}
            style={{height: 54}}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
