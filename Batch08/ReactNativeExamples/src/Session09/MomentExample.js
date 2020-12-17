import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import moment from 'moment';

export default function MomentExample() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 32 }}>{moment('2020-12-04 17:05:30').add(7, 'days').format('DD/MM/yyyy hh:mm:ss A')}</Text>
    </SafeAreaView>
  );
}
