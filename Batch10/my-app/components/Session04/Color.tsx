import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Color = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ opacity: 0.5, backgroundColor: 'rgba(0, 255, 0, 0.5)', height: 300, width: 400 }}>
        <View style={{ backgroundColor: '#00000075', width: 100, height: 100 }}></View>
      </View>
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
});
