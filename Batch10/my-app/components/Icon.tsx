import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
// import  Ionicons  from '@expo/vector-icons/Ionicons';

type Props = {};

const Icon = (props: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name='checkmark-circle-outline' size={16} color='black' />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 16,
    // backgroundColor: 'green',
    borderRadius: 8,
  },
});
