import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';

type Props = {};

const EffectExample = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(30);
  const [refresh, setRefresh] = React.useState(new Date());

  // ComponentDidUpdate
  React.useEffect(() => {
    console.log('Always run when state changed');
  });

  // ComponentDidMount (class)
  React.useEffect(() => {
    console.log('Once run when component mounting');
  }, []);

  // ComponentDidUpdate with conditiona;
  React.useEffect(() => {
    console.log('Always run when refresh change');
    // Lấy danh sách hàng hóa để hiển thị
  }, [refresh]);

  React.useEffect(() => {
    // Release resources
    return () => {
      console.log('Once run when component will unmounting');
    };
  }, []);

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>
      <Button
        title='Increase Count'
        onPress={() => {
          setCount((c) => c + 1);
        }}
      />

      <Text>Age: {age}</Text>
      <Button
        title='Increase Age'
        onPress={() => {
          setAge((a) => a + 1);
        }}
      />
    </SafeAreaView>
  );
};

export default EffectExample;
