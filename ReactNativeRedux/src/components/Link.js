import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <View>
    <TouchableOpacity
      onPress={onClick}
      //disabled={active}
      style={{
        marginLeft: 4,
      }}
    >
      {children}
    </TouchableOpacity>
  </View>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
