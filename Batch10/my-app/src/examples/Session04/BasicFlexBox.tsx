import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const BasicFlexBox = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
        <View style={{ width: 50, height: 50, backgroundColor: 'violet' }}></View>
        <View style={{ width: 80, height: 70, backgroundColor: 'blue' }}></View>
        <View style={{ width: 50, height: 120, backgroundColor: 'pink' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'black' }}></View>
        <View style={{ width: 80, height: 70, backgroundColor: 'brown' }}></View>
        <View style={{ width: 50, height: 90, backgroundColor: 'aqua' }}></View>
      </View>

      <View style={styles.row2}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>

      <View style={styles.row3}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
        <View style={styles.orangeBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default BasicFlexBox;

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  row1: {
    backgroundColor: 'yellow',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  row2: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'violet',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  row3: {
    flexDirection: 'row',
    height: 300,
    backgroundColor: 'pink',
    flexWrap: 'wrap',
  },

  redBox: {
    width: 75,
    height: 50,
    backgroundColor: 'red',
    // alignSelf: 'flex-start',
  },

  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    // alignSelf: 'flex-end',
  },

  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },

  orangeBox: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    flex: 1,
  },

  blackBox: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    flex: 1,
  },
});
