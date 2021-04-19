import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default function BasicHook({ title }) {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.text}>{count}</Text>
      <Button
        title='Increase'
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
}
