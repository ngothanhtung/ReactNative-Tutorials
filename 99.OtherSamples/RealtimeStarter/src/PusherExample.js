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

import Pusher from 'pusher-js/react-native';

var pusher = new Pusher('6f007ebd6dcbf944921f', {
  wsHost: 'ws.pusherapp.com',
  httpHost: 'sockjs.pusher.com',
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
// END: PUSHER
export default class PusherExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [
        { name: "john", message: "hello" },
        { name: "peter", message: "hi" }
      ],
    };

    var component = this;
    channel.bind('my-event', function (data) {
      var messages = component.state.messages.slice();
      messages.push(data);
      component.setState({ messages: messages });
      console.log(component.state.messages);
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700' }}>{this.props.message}</Text>
            <Text>{this.props.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
