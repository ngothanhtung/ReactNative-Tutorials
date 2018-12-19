import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';

export default class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: this.props.title
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder={"Enter your username"}
          onChangeText={(text) => { this.setState({ username: text }) }}
        />
        <Text style={{ color: 'red', fontSize: 32 }}>
          {this.state.username}
        </Text>
        <Button title="Click me" onPress={() => {
          Alert.alert('React Native', this.state.username);
        }} />
      </View>
    );
  }
}
