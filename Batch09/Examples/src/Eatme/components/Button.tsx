import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, GestureResponderEvent } from 'react-native';
import PropTypes from 'prop-types';

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

type Props = {
  style: ViewStyle;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  titleColor: string;
  icon: React.ReactElement;
  image: React.ReactElement;
};

function Button(props: Props) {
  return (
    <TouchableOpacity style={[styles.loginButton, props.style]} onPress={props.onPress}>
      <React.Fragment>
        {props.icon}
        {props.image}
        <Text style={[styles.loginText, { color: props.titleColor }]}>{props.title}</Text>
      </React.Fragment>
    </TouchableOpacity>
  );
}

// Type checking
Button.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.element,
  image: PropTypes.element,
};

// default props
Button.defaultProps = {
  titleColor: 'white',
  style: null,
  icon: null,
  image: null,
};

export default Button;
