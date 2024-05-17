import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from './Icon';

type Props = {};

const PasswordInput = (props: Props) => {
  return (
    <View>
      <View>
        <Text>Password</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}> * * * * * * * * </Text>
        <Icon />
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    marginTop: 9,
    height: 56,
    backgroundColor: '#E4E4E4',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputText: {
    color: '#111A2C',
  },
});
