import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

class StarAndNumber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name='star' style={styles.icon} />
        <Text style={styles.text}>{this.props.number > 5 || this.props.number < 0 ? 'error' : this.props.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 56,
    backgroundColor: '#FF6C44',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
    fontSize: 12,
  },

  icon: {
    color: '#ffffff',
    marginRight: 4,
  },
});

StarAndNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default StarAndNumber;
