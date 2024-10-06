import _ from 'lodash';
import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import Container from '@/components/Container';
import TaskItem from '@/components/TaskItem';
import { signIn } from '@/firebase/AuthServices';
import { auth } from '@/firebase/initializeApp';
import { createTask, getAssigneeTasks } from '@/firebase/TaskServices';
import { Task } from '@/types';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { WorkspaceStackParamList } from '../WorkspaceStackParamList';

type Props = {
  route: RouteProp<WorkspaceStackParamList, 'Tasks'>;
  navigation: NativeStackNavigationProp<WorkspaceStackParamList>;
};

const TasksScreen = ({ route, navigation }: Props) => {
  // Get project from route params
  const { project } = route.params;

  console.log('project', project);

  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // const loginHandler = async () => {
    //   const email = 'tungnt@softech.vn';
    //   const password = '123456789';
    //   const user = await signIn({ email, password });
    //   console.log('user', user);
    // };
    // loginHandler();
  }, []);

  React.useEffect(() => {
    try {
      // Fetch tasks
      setLoading(true);
      getAssigneeTasks({
        projectId: project.id as string,
        assigneeId: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
      }).then((tasks) => {
        setTasks(tasks);

        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [refresh]);

  const records = _.sortBy(tasks, ['dueDate'], ['desc']);

  const createTaskHandler = async () => {
    // const user = auth.currentUser;

    try {
      const task = await createTask({
        title: 'Task 21',
        description: 'Description 21',
        startDate: new Date('2024-10-01 00:00:00'),
        dueDate: new Date('2024-10-06 12:30:00'),
        status: 'To do',
        assignee: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        project: 'DG7ODCrWTO0jCSP5tZv8',
      });

      // Thành công
      // Cách 1: Thêm task vào mảng tasks
      setTasks([...tasks, task]);

      // Cach 2: Fetch lại tasks
      // setRefresh(refresh + 1);

      console.log('task', task);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        {/* {loading && (
          <View style={{ padding: 24 }}>
            <ActivityIndicator size='large' />
          </View>
        )} */}

        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshing={loading}
          refreshControl={
            <RefreshControl
              tintColor='white'
              colors={['white']}
              refreshing={loading}
              onRefresh={() => {
                setRefresh(refresh + 1);
              }}
            />
          }
          data={records}
          renderItem={({ item, index }) => {
            return <TaskItem task={item} />;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />

        <Button onPress={createTaskHandler}>Create task</Button>
      </SafeAreaView>
    </Container>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  text: {
    color: 'white',
  },
});
