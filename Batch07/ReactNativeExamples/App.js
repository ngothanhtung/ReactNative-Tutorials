import React, {Component} from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
  Appbar,
  Paragraph,
  Dialog,
  Portal,
  FAB,
} from 'react-native-paper';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e84393',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} />
        </Appbar.Header>
        <View style={{flex: 1, padding: 12}}>
          <Button
            loading={false}
            disabled={false}
            icon="home"
            mode="contained"
            onPress={() => {
              setVisible(true);
            }}>
            Press me
          </Button>

          {/* <Portal>
            <Dialog
              visible={visible}
              onDismiss={() => {
                setVisible(false);
              }}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    // code here...
                    setVisible(false);
                  }}>
                  Done
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal> */}

          <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => console.log('Pressed')}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
