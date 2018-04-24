import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types'; 

class Header extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 24 }}>
          {this.props.text}
        </Text>
        <Button onPress={this.props.alertFunction} title="Click me" />
      </View>
    );
  }
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  alertFunction: PropTypes.func.isRequired,
}

export default Header;