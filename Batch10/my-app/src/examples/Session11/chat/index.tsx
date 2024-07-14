import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { collection, query, onSnapshot, QuerySnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../firebase/initializeApp';
import { GiftedChat, IMessage, Send } from 'react-native-gifted-chat';
import _ from 'lodash';

type Props = {};

const Chat = (props: Props) => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  const conversationId = '1';
  const loggedInUserId = '1';

  const messagesRef = collection(db, `conversations/${conversationId}/messages`);

  React.useEffect(() => {
    const q = query(messagesRef);

    const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot) => {
      let items: any[] = [];
      querySnapshot.forEach((documentSnapshot) => {
        const data = documentSnapshot.data();

        let message: IMessage = {
          _id: documentSnapshot.id,
          text: data.message.content,
          createdAt: data.createdAt?.toDate(),
          user: {
            _id: data.sender.id,
            name: data.sender.name,
          },
        };

        items.push(message);
      });

      const sortedMessage = _.orderBy(items, ['createdAt'], ['desc']);

      setMessages(sortedMessage);
    });

    // Stop listening to changes
    return () => {
      unsubscribe();
    };
  }, []);

  const onSend = React.useCallback(async (messages: IMessage[]) => {
    const message = messages[0];
    console.log('message', message);

    const newMessage = {
      message: {
        content: message.text,
        type: 'text',
      },
      sender: {
        id: loggedInUserId,
        name: 'Ngô Thanh Tùng',
      },
      to: {
        id: '2',
        name: 'Vũ Phan Huấn',
      },
      createdAt: serverTimestamp(),
    };
    // Send a message to firestore

    const addRef = await addDoc(messagesRef, newMessage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        showUserAvatar={false}
        placeholder='Nhập nội dung cần trao đổi'
        alwaysShowSend
        renderSend={(sendProps) => {
          return (
            <Send {...sendProps} containerStyle={{ justifyContent: 'center', marginRight: 12 }}>
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontWeight: '700' }}>Gửi</Text>
              </View>
            </Send>
          );
        }}
        user={{
          _id: '1',
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
