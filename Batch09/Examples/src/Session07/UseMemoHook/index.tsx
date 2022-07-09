import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native';

type Props = {};

const expensiveFunction = (number: number) => {
  console.log('Calculating...');
  const max = 1000000000;

  // expensive calculation
  for (let i = 0; i < max; i++) {
    number += 1;
  }

  return number;
};

const UseMemoHook = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  // Without React.useMemo(arrow_function)
  // const calculation = expensiveFunction(count);

  // Within React.useMemo(arrow_function)
  const calculation = React.useMemo(() => {
    return expensiveFunction(count);
  }, [count]);

  return (
    <View>
      {todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}

      <Button
        title='Add todo'
        onPress={() => {
          setTodos((t) => {
            return [...t, 'New Todo @ ' + new Date()];
          });
        }}
      />

      <Text> {calculation}</Text>

      <Button
        title='Increase Count'
        onPress={() => {
          setCount((c) => c + 1);
        }}
      />
    </View>
  );
};

export default UseMemoHook;
