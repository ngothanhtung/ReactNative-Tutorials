import React, { useReducer, useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';

function Shape() {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'timing',
      }}
      style={styles.shape}
    />
  );
}

export default function FadeIn() {
  // const [visible, toggle] = useReducer(s => !s, true);

  const [visible, setVisible] = useState(false);

  return (
    <Pressable onPress={() => setVisible(x => !x)} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});
