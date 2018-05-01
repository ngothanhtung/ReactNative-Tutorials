import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <View>
    <TouchableOpacity
      onPress={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <Text>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo