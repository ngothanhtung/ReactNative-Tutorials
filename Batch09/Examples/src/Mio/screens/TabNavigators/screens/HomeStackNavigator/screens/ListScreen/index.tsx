import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Products from '../../../../../../components/Products';
import Promotion from '../../../../../../components/Promotion';

export default function ListScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Promotion />
        <Products />
        <View style={{ height: 12 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
