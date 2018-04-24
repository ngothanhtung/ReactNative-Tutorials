import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const Header = () => (
  <View>
    <Text style={{ fontSize: 24 }}>
      {this.props.text}
    </Text>
    <Button onPress={this.props.alertFunction} title="Click me" />
  </View>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  alertFunction: PropTypes.func.isRequired,
};

export default Header;
