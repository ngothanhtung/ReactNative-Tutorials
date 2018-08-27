import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#b2bec3',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,

  },
  textInput: {
    height: 48,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  }
});

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.password}
        />
      </View>
    );
  }
}
