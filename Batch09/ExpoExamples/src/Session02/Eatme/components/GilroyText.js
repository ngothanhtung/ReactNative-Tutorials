import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#898B9A',
  },
});

class GilroyText extends Component {
  render() {
    return (
      <View style={{ flexDirection: this.props.direction }}>
        <Text style={[styles.text, this.props.style, { fontFamily: this.props.fontStyle === undefined ? 'SVN-Gilroy-Regular' : 'SVN-Gilroy-' + this.props.fontStyle }]}>{this.props.children}</Text>
      </View>
    );
  }
}

export default GilroyText;
