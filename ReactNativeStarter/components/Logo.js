import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  View,
  Text,
} from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
