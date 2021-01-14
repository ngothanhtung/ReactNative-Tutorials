/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AppContext from './AppContext';

export default function ThemedButton({ text, onPress }) {
  const { count, theme, setTheme } = React.useContext(AppContext);
  return (
    <>
    <TouchableOpacity style={{ margin: 4, justifyContent: 'center', alignItems: 'center', height: 48, backgroundColor: theme.background }} onPress={onPress}>
      <Text style={{ color: theme.foreground }}>{text}</Text>
    </TouchableOpacity>
    <Text style={{fontSize: 48}}>{count}</Text>
    </>
  );
}
