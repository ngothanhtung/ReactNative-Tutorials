import { View, Text, TextStyle } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  text: string;
  fontSize: number;
  status: 'waiting' | 'success';
  style: TextStyle;
};

const Header = (props: Props) => {
  return (
    <View>
      <Text style={props.style}>{props.text}</Text>
    </View>
  );
};

// Typechecking
Header.propTypes = {
  text: PropTypes.string.isRequired, // reuired prop
  fontSize: PropTypes.number, // optional prop
};

// Default props
Header.defaultProps = {
  fontSize: 16,
};

export default Header;
