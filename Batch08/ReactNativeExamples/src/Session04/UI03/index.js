/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: 'white',
              borderWidth: 10,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderColor: 'blue',
              borderBottomRightRadius: 20,
              marginTop: 10,
              marginRight: -10,
            }}>
            <View style={{ height: 60, width: 60, backgroundColor: 'orange', borderRadius: 20, marginRight: 10 }} />
          </View>
        </View>

        <View style={{ height: 90, flex: 1, backgroundColor: 'blue', borderTopLeftRadius: 20 }} />
      </View>

      <View style={{ marginTop: -10, height: 90, flex: 1, backgroundColor: 'blue' }} />
    </SafeAreaView>
  );
}
