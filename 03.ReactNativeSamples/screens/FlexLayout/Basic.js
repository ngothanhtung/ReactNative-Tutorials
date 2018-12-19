import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

// flexDirection to a component's style determines the primary axis of its layout
// justifyContent to a component's style determines the distribution of children along the primary axis
// alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa)
// alignContent controls how rows align in the cross direction, overriding the alignContent of the parent
// alignSelf controls how a child aligns in the cross direction, overriding the alignItems of the parent

const { width, height } = Dimensions.get('window');

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 6, flexWrap: 'wrap', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 70, height: 50, backgroundColor: 'red', alignSelf: 'flex-start' }}></View>
          <View style={{ width: 50, height: 70, backgroundColor: 'skyblue', alignSelf: 'flex-start' }}></View>
          <View style={{ width: 80, height: 90, backgroundColor: 'steelblue' }} ></View>
          {/* <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 80, height: 70, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 50, height: 90, backgroundColor: 'steelblue' }} ></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
          <View style={{ width: 80, height: 70, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 50, height: 90, backgroundColor: 'steelblue' }} ></View> */}
        </View>

        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} ></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} ></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} ></View>
        </View>

        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'blue', alignItems: 'center' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} ></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} ></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} ></View>
        </View>
      </View>
    );
  }
};
