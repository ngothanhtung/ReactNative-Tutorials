import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  textInput: {
    height: 56,
    backgroundColor: '#bdc3c7',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});

export default class HandlingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* USERNAME */}
        <TextInput
          autoCapitalize='none'
          autoFocus={true}
          clearButtonMode='always'
          keyboardType='default'
          keyboardAppearance='dark'
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({ username: text });
          }}
          onEndEditing={() => {
            alert('onEndEditing');
          }}
          placeholder='Enter your username'
          placeholderTextColor='blue'
          underlineColorAndroid='transparent'
        />

        <View style={{ height: 12 }} />

        {/* PASSWORD */}
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your password'
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />

        {/* BUTTON */}
        <Button
          title='Click me'
          onPress={() => {
            alert(this.state.username + ' - ' + this.state.password);
          }}
        />

        <Text>
          {this.state.username} - {this.state.password}
        </Text>
      </View>
    );
  }
}
