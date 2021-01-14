import React from 'react';
import { View } from 'react-native';
import AppContext from './AppContext';
import ThemedButton from './ThemedButton';
import themes  from './themes';

export default function Toolbar() {
  const { count, setCount, theme, setTheme } = React.useContext(AppContext);

  return (
    <View>
      <ThemedButton
        text="Change Theme"
        onPress={() => {
          setTheme(theme === themes.light ? themes.dark : themes.light);
        }}
      />
      <ThemedButton text={count} onPress={() => setCount(count + 1)} />
    </View>
  );
}
