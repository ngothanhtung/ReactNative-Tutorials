import { View, Text } from 'react-native';
import React from 'react';

type Props = {};

const Notification = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1dd1a1' }}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
