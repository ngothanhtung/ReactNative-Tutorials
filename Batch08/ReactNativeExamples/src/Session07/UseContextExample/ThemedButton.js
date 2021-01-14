/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, Text } from 'react-native';
import AppContext from './AppContext';

export default function ThemedButton({ text, onPress }) {
  const { theme } = React.useContext(AppContext);
  return (
    <Pressable style={{ margin: 4, justifyContent: 'center', alignItems: 'center', height: 48, backgroundColor: theme.background }} onPress={onPress}>
      <Text style={{ color: theme.foreground }}>{text}</Text>
    </Pressable>
  );
}
