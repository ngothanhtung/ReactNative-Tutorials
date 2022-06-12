import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default class ReviewRider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: 'Screen1',
    };
  }
  render() {
    return (
      <View>
        {this.state.screenName === 'Screen1' && (
          <Screen1
            nextScreen={() => {
              // Call API
              // => OK: true
              // Change screen
              this.setState({ screenName: 'Screen2' });
            }}
          />
        )}
        {this.state.screenName === 'Screen2' && <Screen2 />}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
