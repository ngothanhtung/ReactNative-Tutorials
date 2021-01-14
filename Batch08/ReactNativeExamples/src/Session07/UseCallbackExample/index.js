import React from 'react';
import { Text, View } from 'react-native';
import Count from './components/Count';
import Button from './components/Button';

export default function UseCallbackExample() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  // Not use callback
  // const increaseAge = () => {
  //   setAge(age + 1);
  // };

  // const increaseSalary = () => {
  //   setSalary(salary + 100);
  // };

  // Use callback
  const increaseAge = React.useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = React.useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  console.log('Rendering - UseCallbackExample');

  return (
    <View>
      <Text>useCallback hooks</Text>

      <Count text="Age" count={age} />
      <Button handleClick={increaseAge} text="Increase Age" />

      <Count text="Salary" count={salary} />
      <Button handleClick={increaseSalary} text="Increase Salary" />
    </View>
  );
}
