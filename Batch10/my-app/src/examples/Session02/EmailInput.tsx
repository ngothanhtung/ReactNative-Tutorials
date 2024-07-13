import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Icon from './Icon';

type Props = {};

const EmailInput = (props: Props) => {
  const [text, setText] = React.useState('tungnt@softech.vn');

  const onChangeText = (value: string) => {
    setText(value);
  };

  return (
    <View>
      <View>
        <Text>Email</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} value={text} onChangeText={onChangeText} />
        <Icon />
      </View>
    </View>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    borderRadius: 8,
    height: 56,
    justifyContent: 'space-between',

    marginTop: 9,
    paddingRight: 24,
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 24,
  },

  inputText: {
    color: '#111A2C',
  },
});
