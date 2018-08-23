import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

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
        <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <View key={index}>
                <View style={{ height: 80, flexDirection: 'row' }}>
                  <View style={{ height: 80, width: 80, opacity: (index + 2) * 0.15, backgroundColor: '#8e44ad', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 48, width: 48, backgroundColor: 'white', borderRadius: 24 }}></View>
                  </View>
                  <View style={{ height: 80, flex: 1, opacity: (index + 2) * 0.15, backgroundColor: '#27ae60' }}></View>
                  <View style={{ height: 80, width: 80, opacity: (index + 2) * 0.15, backgroundColor: '#2c3e50' }}></View>
                </View>
                {/* ------------------------------------------------------------------ */}
                <View style={{ height: 1 }}></View>
              </View>
            ))
          }
        </ScrollView>
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
