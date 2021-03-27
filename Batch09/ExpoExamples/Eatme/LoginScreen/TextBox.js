import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  labelText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Medium',
    color: '#898B9A',
  },

  placeholderText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Medium',
    color: '#898B9A',
  },

  icon: { color: '#898B9A' },

  inputContainer: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F5F5F8',
    paddingHorizontal: 24,
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default class TextBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.placeholderText}>{this.props.placeholder}</Text>
          <Icon style={styles.icon} name={this.props.icon} size={24} />
        </View>
      </View>
    );
  }
}
