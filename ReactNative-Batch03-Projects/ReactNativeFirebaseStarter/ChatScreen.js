import React, { Component } from 'react'
import { Text, TextInput, View, Button, AsyncStorage, FlatList } from 'react-native'
import firebase from 'react-native-firebase';
const database = firebase.database();

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      messages: []
    }
  }
  componentWillMount() {
    database.ref('messages').on('value', snapshot => {
      var items = snapshot.val();
      var messages = [];
      for (const key in items) {
        messages.push(items[key]);
      }
      this.setState({
        messages: messages.sort((x, y) => {
          var valueX = x.createdTime;
          var valueY = y.createdTime;
          if (valueX < valueY) { return -1; }
          if (valueX > valueY) { return 1; }
          return 0;
        })
      });
    });

    database.ref('messages').on('child_added', snapshot => {
      const message = snapshot.val();
      if (!message.received) {
        database.ref('messages').child(snapshot.key).update({
          received: true
        })
      }
    });
  }

  renderItem({ item }) {
    return (
      <View style={{ flex: 1, padding: 12, flexDirection: 'row' }}>
        {
          (item.from === 'john') &&
          <View style={{ flex: 1 }}></View>
        }
        <View style={{ backgroundColor: item.from === 'john' ? '#0984e3' : '#dfe6e9', padding: 12, borderRadius: 24 }}>
          <Text style={{ fontWeight: '700', color: item.from === 'john' ? 'white' : 'black' }}>
            {item.from}
          </Text>
          <Text style={{ fontSize: 18, color: item.from === 'john' ? 'white' : 'black' }}>
            {item.messageText}
          </Text>
        </View>
      </View>
    );
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.state.messages}
          renderItem={item => (this.renderItem(item))}
          keyExtractor={(item, index) => (index.toString())}
        />
        <TextInput
          value={this.state.messageText}
          onChangeText={(text) => { this.setState({ messageText: text }) }}
        />
        <Button title="Send" onPress={() => {
          const serverTime = firebase.database.ServerValue.TIMESTAMP;
          database.ref('messages').push({
            messageText: this.state.messageText,
            from: 'john',
            to: 'peter',
            createdTime: serverTime
          }, (error) => {
            this.setState({ messageText: '' });
          });
        }} />
      </View>
    )
  }
}