import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

type Props = {};

const SaveMeButton = (props: Props) => {
  const [check, setCheck] = React.useState(false);

  let color = '#898B9A';
  if (check === true) {
    color = '#FF6C44';
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('Save Me');
        setCheck(!check);
      }}
    >
      <View style={styles.container}>
        <View style={[styles.buttonContainer, { borderColor: color }]}>
          <View style={[styles.circle, { backgroundColor: color, alignSelf: check ? 'flex-end' : 'flex-start' }]}></View>
        </View>
        <View>
          <Text style={[styles.text, { color: color }]}>Save Me</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderColor: '#FF6C44',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#FF6C44',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    color: '#FF6C44',
    fontFamily: 'SVN-Gilroy-Regular',
  },
});
