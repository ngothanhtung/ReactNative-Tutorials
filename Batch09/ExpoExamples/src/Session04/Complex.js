/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  row1: {
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  redBox: {
    width: 75,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
  },

  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    // alignSelf: 'flex-start',
  },

  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },

  orangeBox: {
    backgroundColor: 'orange',
    // width: 100,
    height: 100,
    flex: 1,
    flexBasis: 100, // The flexBasis property sets the initial main size of a flex item
    // flexGrow: 1, // The flexGrow property sets the flex grow factor of a flex item's main size.
  },

  blackBox: {
    backgroundColor: 'black',
    // width: 100,
    // height: 100,
    flex: 1,
    // flexBasis: 100, // The flexBasis property sets the initial main size of a flex item
    // flexGrow: 1, // The flexGrow property sets the flex grow factor of a flex item's main size.
  },

  row2: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
    backgroundColor: 'violet',
  },
  row3: {
    flexDirection: 'row',
    height: 200,
    backgroundColor: 'pink',
    flexWrap: 'wrap',
  },
});

// flexDirection to a component's style determines the primary axis of its layout
// justifyContent to a component's style determines the distribution of children along the primary axis
// alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa)
// alignContent controls how rows align in the cross direction, overriding the alignContent of the parent
// alignSelf controls how a child aligns in the cross direction, overriding the alignItems of the parent

export default class FlexDirectionBasics extends Component {
  render() {
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
          {/* <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} /> */}
          <View style={styles.orangeBox} />
          <View style={styles.blackBox} />
        </View>
      </View>
    );
  }
}
