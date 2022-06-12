import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          let s = !this.state.status;
          this.setState({ status: s });
        }}
      >
        <Icon name='heart' size={16} color={this.state.status ? '#FF6C44' : '#898B9A'} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
