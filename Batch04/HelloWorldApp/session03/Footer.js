import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
class Footer extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.text} </Text>
      </View>
    )
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  optionalArray: PropTypes.array.isRequired,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};

export default Footer
