import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: 120,
    width: 120,
    backgroundColor: '#bdc3c7',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Gender extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      gender: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: this.state.gender === true ? '#f1c40f' : '#bdc3c7' }]}
          onPress={() => {
            this.setState({ gender: true });
          }}
        >
          <Text>Male</Text>
        </TouchableOpacity>
        <View style={{ width: 12 }} />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: this.state.gender === false ? '#f1c40f' : '#bdc3c7' }]}
          onPress={() => {
            this.setState({ gender: false });
          }}
        >
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
