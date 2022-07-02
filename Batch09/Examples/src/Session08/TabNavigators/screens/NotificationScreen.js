import React from 'react';
import { View, Text, Button } from 'react-native';

export default function NotificationScreen({ navigation }) {
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
