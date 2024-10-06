import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExamplesScreen from './screens/ExamplesScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import TasksScreen from './screens/TasksScreen';
import { WorkspaceStackParamList } from './WorkspaceStackParamList';

const Stack = createNativeStackNavigator<WorkspaceStackParamList>();

type Props = {};

const FirebaseStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='Projects'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Examples' component={ExamplesScreen} />
      <Stack.Screen name='Projects' component={ProjectsScreen} />
      <Stack.Screen name='Tasks' component={TasksScreen} />
    </Stack.Navigator>
  );
};

export default FirebaseStackNavigator;
