import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Light = () => {
  const [status, setStatus] = React.useState(false);

  console.log('Light -> status', status);

  const onPress = () => {
    setStatus(!status);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{status ? 'Light is on' : 'Light is off'}</Text>
    </TouchableOpacity>
  );
};

export default Light;

const styles = StyleSheet.create({});
