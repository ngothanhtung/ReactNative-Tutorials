import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {};

interface User {
  id: number;
  name: string;
}

const StateExample = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState(['']);
  const [user, setUser] = React.useState<User | any>(null);
  // const [user, setUser] = React.useState(null);

  return (
    <SafeAreaView>
      <Text>{count}</Text>
      {todos.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}

      <Text>{user?.name}</Text>
      <Button
        onPress={() => {
          // Cách 1: Không dùng các kỹ thuật cached (function, componenty)
          // setCount(count + 1);
          // Cách 2 dùng cho cả 2 được.
          setCount((c) => c + 1);
        }}
        title='Increase count'
      />

      <Button
        title='Add new todo'
        onPress={() => {
          setTodos((t) => [...t, 'New todo: ' + new Date()]);
        }}
      />

      <Button
        title='Login'
        onPress={() => {
          // setUser({ ...user, id: 9 });
          setUser((u: any) => ({ ...u, name: 'Peter' }));
        }}
      />
    </SafeAreaView>
  );
};

export default StateExample;
