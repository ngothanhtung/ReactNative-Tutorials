import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatStackParamList } from './ChatStackParamList';
import ChatListScreen from './screens/ChatListScreen';

const Stack = createNativeStackNavigator<ChatStackParamList>();

type Props = {};

const ChatStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='ChatList'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ChatList' component={ChatListScreen} />
    </Stack.Navigator>
  );
};

export default ChatStackNavigator;
