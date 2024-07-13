import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Icon, TextInput } from 'react-native-paper';

type Props = {};

const PaperButtons = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label='Email' mode='outlined' left={<TextInput.Icon icon='email' />} outlineColor='violet' activeOutlineColor='green' />
      <TextInput label='Password' mode='outlined' left={<TextInput.Icon icon='lock' />} right={<TextInput.Icon icon='eye' />} secureTextEntry={true} />
      <Button
        compact={true}
        icon='home'
        mode='contained'
        buttonColor='blue'
        textColor='yellow'
        loading={true}
        disabled={true}
        uppercase={false}
        onPress={() => {
          console.log('Button pressed');
        }}
      >
        Press me
      </Button>
    </View>
  );
};

export default PaperButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
});
