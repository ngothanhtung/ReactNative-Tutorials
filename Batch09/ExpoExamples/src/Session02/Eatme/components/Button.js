import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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

class Button extends Component {
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
