import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const SaveMeButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.circle}></View>
      </View>
      <View>
        <Text>Save Me</Text>
      </View>
    </View>
  );
};

export default SaveMeButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  buttonContainer: {
    height: 16,
    width: 32,
    borderColor: '#898B9A',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 4,
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#898B9A',
  },
});
