import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Products from '../../../../../../components/Products';
import Promotion from '../../../../../../components/Promotion';

export default function ListScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Promotion />
        <Products />
        <Button
          title='Go to detail'
          onPress={() => {
            navigation.navigate('Detail');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
