/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';
type Props = {
  navigation: any;
};
const Menu2Screen = ({ navigation }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Sign out</Text>

      <Button
        title='Open Menu'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Menu2Screen;
