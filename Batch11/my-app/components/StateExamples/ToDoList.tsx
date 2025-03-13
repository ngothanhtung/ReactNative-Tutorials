import { Button, Pressable, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import React from 'react';

import Feather from '@expo/vector-icons/Feather';

type Props = {};

const data = [
  {
    id: 1,
    title: 'Do laundry',
    completed: true,
  },
  {
    id: 2,
    title: 'Buy groceries',
    completed: false,
  },
  {
    id: 3,
    title: 'Clean the house',
    completed: false,
  },
  {
    id: 4,
    title: 'Finish homework',
    completed: true,
  },
  {
    id: 5,
    title: 'Walk the dog',
    completed: false,
  },
  {
    id: 6,
    title: 'Prepare dinner',
    completed: true,
  },
];
// Sử dụng lệnh map trong JS để lặp qua từng phần tử trong mảng tasks
// và trả về một mảng mới với các phần tử đã được xử lý.

const ToDoList = (props: Props) => {
  const [tasks, setTassk] = React.useState(data);

  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {tasks.map((task, index) => {
        return (
          <View style={styles.taskContainer} key={index}>
            <Text>{task.title}</Text>
            <Pressable
              onPress={() => {
                const newTasks = [...tasks]; // Sao chép mảng tasks
                newTasks[index].completed = !newTasks[index].completed;
                // Set lại state với mảng mới
                setTassk(newTasks);
              }}
            >
              <View style={[styles.checkContainer, { borderColor: task.completed ? 'green' : '#000' }]}>{task.completed && <Feather name={task.completed ? 'check' : 'check'} size={24} color='green' />}</View>
            </Pressable>
          </View>
        );
      })}
      <View style={{ width: '100%', paddingHorizontal: 12, marginTop: 24 }}>
        <TextInput
          placeholder='Enter new task'
          value={text}
          autoCorrect={false}
          autoComplete='off'
          style={styles.input}
          onChangeText={(value) => {
            setText(value);
          }}
        />
        <Button
          title='Create new task'
          onPress={() => {
            const newTask = {
              id: tasks.length + 1,
              title: text,
              completed: false,
            };

            // Thêm task mới vào mảng tasks, giống như push
            // tasks.push(newTask);

            // Khuyên dùng hơn
            setTassk([...tasks, newTask]);
            setText('');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  checkContainer: {
    height: 28,
    width: 28,

    borderWidth: 2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
