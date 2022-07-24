import { View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { getAuth } from 'firebase/auth';
import { addDoc, onSnapshot, collection, query } from 'firebase/firestore';

import { db } from '../initializeApp';
import { FlatList } from 'react-native';

const Chat = () => {
  const [text, setText] = React.useState('');

  const [messages, setMessages] = React.useState([]);

  const auth = getAuth();
  // auth.currentUser

  // Get docs
  React.useEffect(() => {
    function initRealtime() {
      const q = query(collection(db, 'chat-messages'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        _.sortBy(result, [
          function (m) {
            return m.createdTime;
          },
        ]);

        setMessages(
          _.sortBy(result, [
            function (m) {
              return m.createdTime;
            },
          ]),
        );
      });

      return unsubscribe;
    }

    const unsubscribe = initRealtime();

    // Unmouting
    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = () => {
    {
      if (text.length > 0) {
        const messageRef = collection(db, 'chat-messages');
        const message = { from: auth.currentUser?.uid, to: 'BwdFttot0dSOft6WJUsYoCYz1k53', text: text, createdTime: new Date() };
        addDoc(messageRef, message)
          .then((value) => {
            // console.log(value);
            setText('');
          })
          .catch((err) => {});
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          style={{ flex: 1 }}
          data={messages}
          extraData={(item, index) => {
            return `message-${index}}`;
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {item.from === auth.currentUser?.uid && <View style={{ flex: 1 }}></View>}
                <View style={item.from === auth.currentUser?.uid ? styles.rightBlock : styles.leftBlock}>
                  <View>
                    <Text>{item.text}</Text>
                  </View>

                  <Text style={styles.time}>{moment(item.createdTime.toDate()).format('DD/MM/yyyy HH:mm:ss')}</Text>
                </View>
                {item.from !== auth.currentUser?.uid && <View style={{ flex: 1 }}></View>}
              </View>
            );
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete='off'
            autoCorrect={false}
            value={text}
            onChangeText={(value) => {
              setText(value);
            }}
            onEndEditing={sendMessage}
            returnKeyType='send'
          />
          <Pressable style={styles.button} onPress={sendMessage}>
            <Text style={styles.buttonText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: '#dfe6e9',
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  button: {
    height: 56,
    backgroundColor: '#2d3436',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  buttonText: {
    color: 'white',
  },

  leftBlock: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#dfe6e9',
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  rightBlock: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#0984e3',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  rightText: {
    color: 'white',
  },

  time: {
    fontSize: 11,
    color: '#2d3436',
  },
});
