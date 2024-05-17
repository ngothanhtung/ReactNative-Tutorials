import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from './Icon';

type Props = {};

const EmailInput = (props: Props) => {
  return (
    <View>
      <View>
        <Text>Email</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputText}>armannijum@gmail.com</Text>
        <Icon />
      </View>
    </View>
  );
};

export default EmailInput;

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
