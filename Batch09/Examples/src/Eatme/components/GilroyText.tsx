import React, { Component, ReactNode } from 'react';
import { Text, View, StyleSheet, TextStyle, TextProps } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#898B9A',
  },
});

type Props = {
  style: TextStyle;
  fontStyle: TextStyle;
  children: string;
};
function GilroyText(props: Props) {
  return <Text style={[styles.text, props.style, { fontFamily: 'SVN-Gilroy-' + props.fontStyle }]}>{props.children}</Text>;
}

// Type checking
GilroyText.propTypes = {
  children: PropTypes.any.isRequired,
  fontStyle: PropTypes.oneOf(['Regular', 'Medium', 'SemiBold', 'Bold']),
  style: PropTypes.object,
};

GilroyText.defaultProps = {
  fontStyle: 'Regular',
};

export default GilroyText;
