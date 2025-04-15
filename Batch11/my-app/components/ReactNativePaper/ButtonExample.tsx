import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';

import Feather from '@expo/vector-icons/Feather';

import { Appbar, Avatar, Button, Card, Dialog, FAB, Portal, Text } from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

type Props = {};

const ButtonExample = (props: Props) => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);

  const [openFab, setOpenFab] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <Button mode="contained" icon="camera">
          Login
        </Button>

        <Button
          mode="contained"
          icon={({ size, color }) => {
            return <Feather name="camera" size={size} color={color} />;
          }}
        >
          Login
        </Button>

        <Button
          mode="contained"
          icon="camera"
          disabled={loading}
          loading={loading}
          onPress={() => {
            // Simulator 3s loading
            setLoading(true);
            // Simulator 3s loading
            setTimeout(() => {
              setLoading(false);
            }, 3000);
          }}
        >
          Login
        </Button>

        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            {/* <Button>Cancel</Button> */}
            <Button mode="contained">Ok</Button>
          </Card.Actions>
        </Card>

        <View>
          <Button onPress={() => setShowDialog(true)}>Show Dialog</Button>
          <Portal>
            <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
              <Dialog.Title>Bạn muốn xóa dữ liệu không?</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">Lưu ý: Việc xóa dữ liệu sẽ không khôi phục được</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={() => {
                    // Code here
                  }}
                >
                  Yes
                </Button>
                <Button
                  onPress={() => {
                    // Code here
                  }}
                >
                  No
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        {/* <FAB icon="plus" mode="flat" style={styles.fab} onPress={() => console.log('Pressed')} /> */}

        <Portal>
          <FAB.Group
            open={openFab}
            visible
            icon={openFab ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add') },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => {
                  console.log('Pressed star');
                },
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => {
                  console.log('Pressed email');
                },
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => {
                  console.log('Pressed notifications');
                },
              },
            ]}
            onStateChange={({ open }) => {
              setOpenFab(open);
            }}
            onPress={() => {
              if (openFab) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </SafeAreaView>
    </View>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    gap: 12,
    margin: 24,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
