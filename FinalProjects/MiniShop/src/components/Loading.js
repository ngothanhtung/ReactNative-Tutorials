import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', itemsAlign: 'center' }}>
        <ActivityIndicator color={colors.PRIMARY} />
        <Text style={{ marginTop: 8, color: colors.PRIMARY, textAlign: 'center' }}>Đang tải dữ liệu ...</Text>
      </View>
    );
  }
}
