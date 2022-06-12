import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        style={this.props.selected ? styles.selectedButton : styles.button}
      >
        {/* <Image source={{ uri: item.imageUrl }} style={styles.image} /> */}
        <Image source={this.props.image} style={styles.image} />
        <Text style={this.props.selected ? styles.selectedText : styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    minWidth: 128,
    borderRadius: 10,
    backgroundColor: '#F5F5F8',
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 8,
  },

  selectedButton: {
    height: 48,
    minWidth: 128,
    borderRadius: 10,
    backgroundColor: '#FF6C44',
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 8,
  },

  image: {
    height: 34,
    width: 34,
    marginRight: 8,
    marginTop: 5,
  },

  selectedText: {
    color: 'white',
    fontWeight: '700',
  },

  text: {
    color: '#525C67',
    fontWeight: '700',
  },
});
