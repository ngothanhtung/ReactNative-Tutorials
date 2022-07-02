import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBFBFB' }}>
      <Text>List</Text>
      <Button
        title='Go back to List'
        onPress={() => {
          navigation.navigate('List');
        }}
      />
    </View>
  );
}
