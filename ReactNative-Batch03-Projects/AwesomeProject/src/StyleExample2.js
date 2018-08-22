import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class StyleExample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ height: 32, backgroundColor: 'white' }}></View>
        <View style={{ height: 60, backgroundColor: 'violet', flexDirection: 'row' }}>
          <View style={{ width: 60, height: 60, backgroundColor: 'yellow' }}></View>
          <View style={{ flex: 1 }}></View>
          <View style={{ width: 60, height: 60, backgroundColor: 'yellow' }}></View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={{ height: 100, width: 80, backgroundColor: 'pink' }}></View>
            <View style={{ height: 100, flex: 1, backgroundColor: 'yellow' }}></View>
            <View style={{ height: 100, width: 80, backgroundColor: 'red' }}></View>
          </View>
          {/* ------------------------------------------------------------------ */}
          <View style={{ height: 1 }}></View>
          {/* ------------------------------------------------------------------ */}
          <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={{ height: 100, width: 80, backgroundColor: 'pink' }}></View>
            <View style={{ height: 100, flex: 1, backgroundColor: 'yellow' }}></View>
            <View style={{ height: 100, width: 80, backgroundColor: 'red' }}></View>
          </View>
          {/* ------------------------------------------------------------------ */}
          <View style={{ height: 1 }}></View>
          {/* ------------------------------------------------------------------ */}
          <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={{ height: 100, width: 80, backgroundColor: 'pink' }}></View>
            <View style={{ height: 100, flex: 1, backgroundColor: 'yellow' }}></View>
            <View style={{ height: 100, width: 80, backgroundColor: 'red' }}></View>
          </View>
        </View>
        <View style={{ height: 60, backgroundColor: 'orange', flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
          </View>
        </View>
      </View>
    );
  }
}
