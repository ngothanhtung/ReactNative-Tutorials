import { View, Text, Button } from 'react-native';
import React from 'react';

type Props = {
  fontSize: number;
  onPress: (value: any) => void;
};

const Counter = ({ fontSize, onPress }: Props) => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: fontSize }}>{count}</Text>
      <Button
        title='Increase'
        onPress={() => {
          setCount((c) => c + 1);
        }}
      />

      <Button
        title='Change Name'
        onPress={() => {
          if (onPress && typeof onPress === 'function') {
            onPress(count);
          }
        }}
      />
    </View>
  );
};

export default Counter;
