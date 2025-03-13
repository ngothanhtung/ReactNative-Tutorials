import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

type Props = {};

const Counter = (props: Props) => {
  // Sử dụng state để quản lý số đếm
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>{count}</Text>
      <CustomButton
        color='blue'
        text='Increase'
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <CustomButton
        color='blue'
        text='Decrease'
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
});
