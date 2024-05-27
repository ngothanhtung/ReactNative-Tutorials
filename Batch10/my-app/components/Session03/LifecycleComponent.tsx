import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const LifecycleComponent = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(0);

  // Chỉ chạy 1 lần duy nhất khi component được render / mount
  React.useEffect(() => {
    console.log('Mount');

    // Chỉ chạy 1 lần duy nhất khi component bị unmount
    return () => {
      console.log('Unmount');
    };
  }, []);

  let x = 0;
  React.useEffect(() => {
    console.log('Increase X');
  }, [x]);

  // Luôn chạy khi có bất kỳ state number thay đổi
  React.useEffect(() => {
    console.log('Increase Count');
  }, [count]);
  // Luôn chạy khi có bất kỳ state number thay đổi
  React.useEffect(() => {
    console.log('Increase Number');
  }, [number]);

  // Luôn chạy khi có bất kỳ state nào thay đổi
  React.useEffect(() => {
    console.log('Increase');
  });

  const onPressCount = () => {
    setCount(count + 1);
  };

  const onPressNumber = () => {
    setNumber(number + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title='Increase Count' onPress={onPressCount} />
      <Button title='Increase Number' onPress={onPressNumber} />
      <Button
        title='Increase X'
        onPress={() => {
          x = x + 1;
        }}
      />
    </View>
  );
};

export default LifecycleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
