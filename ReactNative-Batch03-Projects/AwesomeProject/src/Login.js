import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import Copyright from './Copyright';
import MyTextInput from './MyTextInput';
import MoneyBox from './MoneyBox';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 6,
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    height: 48,
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
        <MoneyBox price={100} quantity={2} discount={10} />

        <MyTextInput placeholder="Username" />
        <MyTextInput placeholder="Password" password={true} />
        <Button title="Click me" onPress={() => { }} />
        <View>
          <Copyright name="Samsung" color="blue" />
          <Copyright name="Apple" color="black" />
          <Copyright name="LG" color="red" />
        </View>
      </View>
    );
  }
}
