import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

import { Avatar, Button, Appbar, Paragraph, DefaultTheme, Provider as PaperProvider, Portal, Dialog, Menu, Modal, Switch, TouchableRipple } from 'react-native-paper';

import ButtonExamples from './components/ButtonExamples';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

type Props = {};

const ReactNativePaperApp = (props: Props) => {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title='Home' />
        <Appbar.Action icon='camera' onPress={() => {}} />
        <Appbar.Action icon='magnify' onPress={() => {}} />
        <Appbar.Action icon='dots-vertical' onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.container}>
        <Button disabled={false} loading={false} icon='cart'>
          Press me
        </Button>

        <Button
          onPress={() => {
            setDialogVisible(true);
          }}
        >
          Chọn nghề nghiệp
        </Button>
        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => {
              setDialogVisible(false);
            }}
          >
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setDialogVisible(false);
                }}
              >
                Done
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <ButtonExamples />

        <View>
          <Menu.Item icon='redo' onPress={() => {}} title='Redo' />
          <Menu.Item icon='undo' onPress={() => {}} title='Undo' />
          <Menu.Item icon='content-cut' onPress={() => {}} title='Cut' disabled />
          <Menu.Item icon='content-copy' onPress={() => {}} title='Copy' disabled />
          <Menu.Item icon='content-paste' onPress={() => {}} title='Paste' />
        </View>

        <Button
          onPress={() => {
            setModalVisible(true);
          }}
        >
          Show modal
        </Button>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => {
              setModalVisible(false);
            }}
            contentContainerStyle={{ backgroundColor: 'white', padding: 20, marginHorizontal: 24, height: 300, borderRadius: 8 }}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>

            <Button
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Close
            </Button>
          </Modal>
        </Portal>

        {/* SWITCH */}
        <Switch
          value={isSwitchOn}
          onValueChange={() => {
            setIsSwitchOn((v) => !v);
          }}
          color='tomato'
          theme={theme}
        />
        <TouchableRipple onPress={() => {}} underlayColor='red' rippleColor='rgba(0, 0, 0, .32)'>
          <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 8, borderColor: 'gray', padding: 8, alignItems: 'center' }}>
            <Avatar.Image size={64} source={{ uri: 'https://i.pravatar.cc/300' }} />
            <Text>Peter Jackson</Text>
          </View>
        </TouchableRipple>
      </View>
    </PaperProvider>
  );
};

export default ReactNativePaperApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
