import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

export default function NotificationScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NOTIFICATION SCREEN</Text>
      <Button
        title='Open Drawer'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}
