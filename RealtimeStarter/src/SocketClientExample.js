import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';

import io from 'socket.io-client';
// SOCKET.IO
var socket = io('http://localhost:9000', {
  secure: true,
  reconnection: true,
  reconnectionDelay: 5000,
  reconnectionAttempts: 10
});

// listen event from server
socket.on('server-message', function (data) {
  alert(data);
});

socket.on('connect', function () {
  socket.emit('client-message', 'Client is connected');
  console.log("Socket is connected");
});

socket.on('disconnect', function () {
  console.log("Socket is disconnected");
});

export default class SocketClientExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
          <TextInput
            style={{ height: 48, backgroundColor: '#ffffff' }}
            placeholder="Enter your name"
            onChangeText={(text) => { this.state.name = text }}
          />
          <TextInput
            style={{ height: 48, backgroundColor: '#ffffff' }}
            placeholder="Enter message"
            onChangeText={(text) => { this.state.message = text }}
          />
          <Button title="Click me" onPress={() => {
            const { name, message } = this.state;
            socket.emit('client-message', { name, message });
          }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
