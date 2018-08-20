import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 6,
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', marginBottom: 12 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Email" />
        </View>
        <View style={{ width: '100%', marginBottom: 12 }}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password" />
        </View>
        <Button title="Click me" onPress={() => { }} />
      </View>
    );
  }
}
