import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBFBFB' }}>
      <Text>List</Text>
      <Button
        title='Go to detail'
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}
