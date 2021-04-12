import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#898B9A',
  },
});

class GilroyText extends Component {
  render() {
    return <Text style={[styles.text, this.props.style, { fontFamily: 'SVN-Gilroy-' + this.props.fontStyle }]}>{this.props.children}</Text>;
  }
}

// Type checking
GilroyText.propTypes = {
  children: PropTypes.string.isRequired,
  fontStyle: PropTypes.oneOf(['Regular', 'Medium', 'SemiBold', 'Bold']),
  style: PropTypes.object,
};

GilroyText.defaultProps = {
  fontStyle: 'Regular',
};

export default GilroyText;
