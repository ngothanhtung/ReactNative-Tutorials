/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import AppContext from './AppContext';
import { themes } from './AppContext';
import Toolbar from './Toolbar';

export default function UseContextExample() {
  const [theme, setTheme] = React.useState(themes.light);
  const [count, setCount] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        count,
        setCount,
      }}>
      <Toolbar />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 48 }}>{count}</Text>
      </View>
    </AppContext.Provider>
  );
}
