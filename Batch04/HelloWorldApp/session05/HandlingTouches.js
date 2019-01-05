import React, { Component } from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'

// STATELESS
// STATEFUL 
export default class TouchableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 0
    };
    // Bind in constructor()
    this.clickMe3 = this.clickMe3.bind(this);
  }

  clickMe1And2(text) {
    this.setState({ text: text });
    console.log('Click me 1 & 2', text)
  }

  clickMe3(text) {
    this.setState({ text: text });
    console.log('Click me 3', text)
  }

  // Use Arrow Function in Class Property
  clickMe4 = (text) => {
    this.setState({ text: text });
    console.log('Click me 4', text)
  }

  render() {
    return (
      <SafeAreaView>
        {/* 1. Dynamic binding in render() */}
        <Button title="Click me 1"
          onPress={this.clickMe1And2.bind(this, 'This is a parameter')}
        />

        {/* 2. Use Arrow Function in Render, similar to #1 */}
        <Button title="Click me 2"
          onPress={() => this.clickMe1And2('This is a parameter')}
        />

        {/* Bind in constructor() */}
        {/* This is the approach currently recommended in the React docs for “better performance in your application”. */}
        <Button title="Click me 3"
          onPress={() => this.clickMe3('This is a parameter')}
        />

        <Button title="Click me 4"
          onPress={this.clickMe4}
        />

        <Button title="Click me (Hay gặp ở các ví dụ)"
          onPress={() => {
            console.log('Click me (Hay gặp ở các ví dụ)')
          }}
        />
      </SafeAreaView>
    )
  }
}
