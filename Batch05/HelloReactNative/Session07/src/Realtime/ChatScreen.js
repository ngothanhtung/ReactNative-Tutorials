import React, { Component } from 'react';
import { Button, Text, View, FlatList, TextInput } from 'react-native';
// FIREBASE
import firebase from 'react-native-firebase';
const realtime = firebase.database();

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageText: '',
      username: 'tungnt',
    };
  }

  componentDidMount() {
    realtime.ref('messages').on('value', (snapshot) => {
      var messages = snapshot.val();
      if (messages != null) {
        var tmpMessages = [];
        for (const key in messages) {
          const message = messages[key];
          tmpMessages.push(message);
        }

        this.setState({
          messages: tmpMessages.sort((x, y) => {
            var valueX = x.createdTime;
            var valueY = y.createdTime;
            if (valueX > valueY) {
              return -1;
            }
            if (valueX < valueY) {
              return 1;
            }
            return 0;
          }),
        });
      }
    });
  }

  sendMessage() {
    const serverTime = firebase.database.ServerValue.TIMESTAMP;

    realtime.ref('messages').push({
      messageText: this.state.messageText,
      fromUser: this.state.username,
      toUser: '',
      createdTime: serverTime,
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        {/* ME */}
        {item.fromUser === this.state.username && (
          <View style={{ marginLeft: 32 }}>
            <View style={{ alignItems: 'flex-end', paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 13, color: '#bdc3c7' }}>{item.fromUser}</Text>
            </View>
            <View style={{ backgroundColor: '#3498db', padding: 16, marginVertical: 4, borderRadius: 16, borderBottomRightRadius: 0 }}>
              <Text style={{ color: 'white' }}>{item.messageText}</Text>
            </View>
          </View>
        )}
        {/* FRIEND */}
        {item.fromUser !== this.state.username && (
          <View style={{ marginRight: 32 }}>
            <View style={{ alignItems: 'flex-start', paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 13, color: '#bdc3c7' }}>{item.fromUser}</Text>
            </View>
            <View style={{ backgroundColor: '#ecf0f1', padding: 16, marginVertical: 4, borderRadius: 16, borderBottomLeftRadius: 0 }}>
              <Text style={{ color: '#2c3e50' }}>{item.messageText}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList inverted={true} data={this.state.messages} keyExtractor={(item, index) => 'message-' + index} renderItem={this.renderItem} />

        <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: 48, backgroundColor: '#ecf0f1', borderRadius: 12 }}>
            <TextInput
              style={{ flex: 1, paddingHorizontal: 12 }}
              placeholder='Username'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(text) => {
                this.setState({ username: text });
              }}
            />
          </View>
          <View style={{ width: 8 }} />
          <View style={{ flex: 1, height: 48, backgroundColor: '#ecf0f1', borderRadius: 12 }}>
            <TextInput
              style={{ flex: 1, paddingHorizontal: 12 }}
              placeholder='Enter your message'
              onChangeText={(text) => {
                this.setState({ messageText: text });
              }}
            />
          </View>
          <View style={{ width: 8 }} />
          <Button
            title='Send'
            onPress={() => {
              this.sendMessage();
            }}
          />
        </View>
      </View>
    );
  }
}
