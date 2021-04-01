import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
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

export default class SocialButton extends Component {
  render() {
    return (
      <View style={[styles.loginButton, this.props.style]}>
        {this.props.icon}
        {this.props.image}
        <Text style={[styles.loginText, { color: this.props.titleColor }]}>{this.props.title}</Text>
      </View>
    );
  }
}
