import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import Header from './Header';

class MyComponent extends Component {
  componentWillUnmount() {
    console.log('MyComponent: componentWillUnmount');
  }

  render() {
    return (
      <View>
        <Text>This is my component</Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    //
    console.log('constructor');
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <View>
        <Header text="This is header" desc="This is desc" />

        <Text> Hello React Native </Text>
        <Button
          onPress={() => {
            this.setState({count: this.state.count + 1});
          }}
          title="Click me"
        />

        <Text style={{fontSize: 48}}>{this.state.count}</Text>
        {this.state.count < 5 && <MyComponent />}

        <Button onPress={() => {}} title="Unmount" />
      </View>
    );
  }
}
