/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

const Menu1Screen = ({ navigation }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Settings</Text>
      <Button
        title='Open Menu'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Menu1Screen;
