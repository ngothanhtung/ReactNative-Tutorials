import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 12,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
    fontFamily: 'SVN-Gilroy-SemiBold',
  },
});

export default class Button extends Component {
  render() {
    return (
      <View style={[styles.loginButton, { backgroundColor: this.props.color }]}>
        {this.props.icon}
        {this.props.image}
        <Text style={[styles.loginText, { color: this.props.titleColor }]}>{this.props.title}</Text>
      </View>
    );
  }
}
