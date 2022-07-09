import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  labelText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Medium',
    color: '#898B9A',
  },

  placeholderText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Medium',
    color: '#898B9A',
  },

  icon: { color: '#898B9A' },

  inputContainer: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F5F5F8',
    paddingHorizontal: 24,
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    height: '100%',
    color: '#111A2C',
  },
});

function TextBox(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} {...props} />
        <Icon
          style={[
            styles.icon,
            props.isValid !== undefined && {
              color: props.isValid === true ? '#27AE60' : '#FF1717',
            },
          ]}
          name={props.icon}
          size={24}
        />
      </View>
    </View>
  );
}

TextBox.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextBox;
