import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

// STATELESS
// STATEFUL 
export default class TouchableComponent extends Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe() {
    console.log('Click me')
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        {/* <Button title="Click me"
          onPress={() => {
            console.log('Click me')
          }}
        /> */}
        {/* <Button title="Click me"
          onPress={this.clickMe.bind(this)}
        />       
       */}
        <Button title="Click me"
          onPress={this.clickMe}
        />
      </View>
    )
  }
}
