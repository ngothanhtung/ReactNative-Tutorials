import { View, Text, Button } from 'react-native';
import React from 'react';

type Props = {};

const List = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List</Text>

      <Button
        title='Go to Details'
        onPress={() => {
          props.navigation.navigate('Details');
        }}
      />
    </View>
  );
};

export default List;
