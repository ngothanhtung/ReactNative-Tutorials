import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default class BasicClass extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    let c = this.state.count + 1;
    this.setState({ count: c });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Text style={styles.text}>{this.state.count}</Text>
        <Button title='Increase' onPress={this.increase} />
      </View>
    );
  }
}
