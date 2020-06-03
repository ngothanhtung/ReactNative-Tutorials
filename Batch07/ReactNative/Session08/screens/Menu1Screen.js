import React from 'react';
import {View, Text, Button} from 'react-native';

const Menu1Screen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Menu 1</Text>
    </View>
  );
};

export default Menu1Screen;
