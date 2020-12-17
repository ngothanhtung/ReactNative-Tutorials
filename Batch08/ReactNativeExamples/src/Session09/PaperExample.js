import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import ButtonExample from './components/ButtonExample';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function PaperExample() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Button color="green" dark icon="home" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <ButtonExample />
      </SafeAreaView>
    </PaperProvider>
  );
}
