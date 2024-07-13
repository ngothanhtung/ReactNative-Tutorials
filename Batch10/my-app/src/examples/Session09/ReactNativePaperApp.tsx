import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import PaperButtons from './PaperButtons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#192a56',
    secondary: 'yellow',
  },
};

type Props = {};

const ReactNativePaperApp = (props: Props) => {
  return (
    <PaperProvider theme={theme}>
      <PaperButtons />
    </PaperProvider>
  );
};

export default ReactNativePaperApp;

const styles = StyleSheet.create({});
