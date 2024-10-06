import moment from 'moment';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { Task } from '@/types';

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('@/components/assets/icons/task-done.png')} style={styles.icon} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.date}>{moment(task.dueDate?.toDate()).format('MMM DD, HH:mm')}</Text>
      </View>
      <View>
        <Image source={require('@/components/assets/icons/account.png')} style={styles.icon} />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    padding: 20,
    minHeight: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5E6272',
  },
  icon: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A5F59C',
  },
});
