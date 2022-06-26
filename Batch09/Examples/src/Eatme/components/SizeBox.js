import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  selectedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
  },

  selectedText: {
    color: '#ffffff',
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderColor: '#BBBDC1',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#BBBDC1',
  },
});

export default class SizeBox extends Component {
  state = {
    selectedIndex: -1,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.sizes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={this.state.selectedIndex === index ? styles.selectedBox : styles.box}
              onPress={() => {
                this.setState({ selectedIndex: index });
              }}
            >
              <Text style={this.state.selectedIndex === index ? styles.selectedText : styles.text}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
