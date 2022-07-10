import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import { Feather } from '@expo/vector-icons';

type Props = {};

const ButtonExamples = (props: Props) => {
  return (
    <View>
      <Button mode='text' icon='home' color='red'>
        Home
      </Button>
      <Button
        icon={(props) => {
          return <Feather color={props.color} name='home' />;
        }}
      >
        Home
      </Button>
    </View>
  );
};

export default ButtonExamples;
