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
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import io from 'socket.io-client';
// SOCKET.IO
var socket = io('http://192.168.1.230:9000', {
  secure: true,
  reconnection: true,
  reconnectionDelay: 5000,
  reconnectionAttempts: 10
});

export default class SocketClientExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: 'ReactNative',
      name: Platform.OS === 'ios' ? 'Apple' : 'Google',
      message: '',
      messages: [],
    };

    var component = this;
    // listen event from server
    socket.on('server-message', function (data) {
      var messages = component.state.messages.slice();
      messages.push(data);
      component.setState({ messages: messages });
    });

    socket.on('connect', function () {
      console.log("Socket is connected with id: " + socket.id);
    });

    socket.on('disconnect', function () {
      console.log("Socket is disconnected");
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        <View style={{ flex: 5, justifyContent: 'center', padding: 12 }}>
          <ScrollView style={{ width: '100%' }}>
            <View style={{ height: 16 }}></View>
            <FlatList
              data={this.state.messages}
              renderItem={({ item }) => (
                <Message {...item} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 12 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <TextInput
                style={styles.textIput}
                underlineColorAndroid="transparent"
                placeholder="Enter your name"
                value={this.state.name}
                onChangeText={(text) => { this.setState({ name: text }) }}
              />
            </View>
            <View style={{ width: 6 }} />
            <View style={{ flex: 4 }}>
              <TextInput
                style={styles.textIput}
                underlineColorAndroid="transparent"
                placeholder="Room name"
                value={this.state.room}
                onChangeText={(text) => { this.setState({ room: text }) }}
              />
            </View>
            <View style={{ width: 6 }} />
            <View style={{ flex: 3 }}>
              <TouchableOpacity style={styles.button} onPress={() => {
                // JOIN TO ROOM
                socket.emit('join-to-room', this.state.room);
              }}
              >
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ flex: 3 }}>
              <TouchableOpacity style={styles.button} onPress={() => {
                // LEAVE FROM ROOM
                socket.emit('leave-from-room', this.state.room);
              }}
              >
                <Text style={styles.buttonText}>Leave</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 6 }} />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 11 }}>
              <TextInput
                style={styles.textIput}
                underlineColorAndroid="transparent"
                placeholder="Enter message"
                onChangeText={(text) => { this.setState({ message: text }) }}
              />
            </View>
            <View style={{ width: 6 }} />
            <View style={{ flex: 3 }}>
              <TouchableOpacity style={styles.button} onPress={() => {
                const data = {
                  name: this.state.name,
                  message: this.state.message,
                  id: socket.id,
                  room: this.state.room,
                };

                // SEND TO SERVER
                socket.emit('client-message', data);

                // SAVE TO STATE
                var messages = this.state.messages.slice();
                messages.push(data);
                this.setState({ messages: messages });
              }}
              >
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={{ padding: 8 }} underlayColor={'#dfe6e9'} activeOpacity={9}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: '700' }}>{this.props.name}: </Text>
          <Text>{this.props.message}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textIput: {
    height: 48,
    backgroundColor: '#dfe6e9',
    paddingLeft: 12,
  },
  button: {
    backgroundColor: '#2d3436',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});
