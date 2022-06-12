import React, { Component } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';

export default class HandleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // Nên dùng: Use Arrow Function in Class Property (Without Parameters)
  clickMeWithoutParamaters = () => {
    this.setState({ text: 'Click me (Without Parameters)' });
  };

  // Nên dùng: Use Arrow Function in Class Property (Within Parameters)
  clickMeWithinParamaters = (text) => () => {
    this.setState({ text: text });
  };

  render() {
    return (
      <SafeAreaView>
        {/* Use Dynamic Arrow Function in Render, (Quick Code, không nên dùng) */}
        <Button
          title='Click me (Quick Code)'
          onPress={() => {
            this.setState({ text: 'Click me (Quick Code)' });
          }}
        />

        {/* Use Arrow Function in Class Property (Without Parameters): Nên dùng */}
        <Button
          title='Click me (Without Parameters)'
          onPress={this.clickMeWithoutParamaters}
        />

        {/* Use Arrow Function in Class Property (Within Parameters): Nên dùng  */}
        <Button
          title='Click me (Within Parameters)'
          onPress={this.clickMeWithinParamaters('Click me (Within Parameters)')}
        />
      </SafeAreaView>
    );
  }
}
