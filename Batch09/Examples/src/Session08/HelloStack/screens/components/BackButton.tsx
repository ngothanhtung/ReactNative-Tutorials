import { View, Button } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

type Props = {};

const BackButton = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title='Back Button'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default BackButton;
