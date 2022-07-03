import { View, Text, Button } from 'react-native';
import React from 'react';

type Props = {};

const ViewDetails = (props: Props) => {
  const { price } = props.route.params;

  return (
    <View>
      <Text>Price: {price}</Text>
      <Button
        title='Go to Change Password'
        onPress={() => {
          props.navigation.navigate('ChangePassword');
        }}
      />
    </View>
  );
};

export default ViewDetails;
