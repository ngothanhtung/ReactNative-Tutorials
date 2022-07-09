import React from 'react';
import Count from './components/Count';
import MyButton from './components/Button';
import { Text, View } from 'react-native';

export default function UseCallbackHook() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  // const increaseAge = () => {
  //   setAge((a) => a + 1);
  // };

  const increaseAge = React.useCallback(() => {
    // setAge(age + 1); // Bị cached, ko nên dùng kiểu này nếu dùng cached techonology
    setAge((a) => a + 1);
  }, []);

  // const increaseSalary = () => {
  //   setSalary((s) => s + 100);
  // };
  const increaseSalary = React.useCallback(() => {
    setSalary((s) => s + 100);
  }, []);

  return (
    <View>
      <Count text='Age' count={age} />
      <MyButton onPress={increaseAge} title='Increase Age'></MyButton>

      <Count text='Salary' count={salary} />
      <MyButton onPress={increaseSalary} title='Increase Salary'></MyButton>
    </View>
  );
}
