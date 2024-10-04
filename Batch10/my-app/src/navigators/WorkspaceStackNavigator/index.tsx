import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateWorkspaceScreen from './screens/CreateWorkspaceScreen';
import { WorkspaceStackParamList } from './WorkspaceStackParamList';

const Stack = createNativeStackNavigator<WorkspaceStackParamList>();

type Props = {};

const WorkspaceStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='CreateWorkspace'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='CreateWorkspace' component={CreateWorkspaceScreen} />
    </Stack.Navigator>
  );
};

export default WorkspaceStackNavigator;
