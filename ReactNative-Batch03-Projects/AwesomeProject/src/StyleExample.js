import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class StyleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View
          style={{
            flex: 3,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ backgroundColor: 'orange', width: 160, height: 160 }}>

          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: 'blue', padding: 20 }}>
          <View style={{ height: 54, backgroundColor: 'gray', flexDirection: 'row' }}>
            <View style={{ height: 54, width: 54, backgroundColor: 'pink' }}></View>
            <View style={{ height: 54, flex: 1, backgroundColor: 'brown' }}></View>
          </View>
          <View style={{ height: 8 }}></View>
          <View style={{ height: 54, backgroundColor: 'gray', flexDirection: 'row' }}>
            <View style={{ height: 54, width: 54, backgroundColor: 'pink' }}></View>
            <View style={{ height: 54, flex: 1, backgroundColor: 'brown' }}></View>
          </View>
          <View style={{ height: 8 }}></View>
          <View style={{ height: 54, backgroundColor: 'red' }}></View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'violet', justifyContent: 'flex-end' }}>
          <View style={{ height: 30, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              Version 1.0
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
