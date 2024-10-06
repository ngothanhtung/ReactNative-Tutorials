import { Text, Button, StyleSheet, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';

import { db } from '../../../firebase/initializeApp';
import { onSnapshot, writeBatch, doc, getDoc, addDoc, updateDoc, collection, serverTimestamp, deleteField, query, getDocs } from 'firebase/firestore';
import { getProfile, signIn, signOut } from '@/firebase/AuthServices';
import { createSubTask, createTask, getComments, getTasks } from '@/firebase/TaskServices';
import { addMembersToProject, createProject, removeMemberFromProject } from '@/firebase/ProjectServices';

type Props = {};

const ExamplesScreen = (props: Props) => {
  const [city, setCity] = React.useState<any>({});
  const [messages, setMessages] = React.useState<any[]>([]);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    // const unsubscribe = onSnapshot(doc(db, 'cities', 'HN'), (doc) => {
    //   console.log('Current data: ', doc.data());
    //   setCity(doc.data());
    // });

    // Snapshot multiple documents in a collection
    const q = query(collection(db, 'messages'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const m: any[] = [];
      querySnapshot.forEach((doc) => {
        m.push(doc.data());
      });
      setMessages(m);
    });

    // Stop listening to changes
    return () => {
      unsubscribe();
    };
  }, []);

  const add = async () => {
    // collection: 'cities' -> table
    // document: 'LA' -> row
    // Add a new document in collection "cities"
    // await setDoc(doc(db, 'cities', 'HCM'), {
    //   name: 'TPHCM',
    //   country: 'VN',
    //   region: 'South',
    //   area: 2095,
    // });

    // Add a new document with a generated id.
    // await addDoc(collection(db, 'cities'), {
    //   name: 'TPHCM',
    //   country: 'VN',
    //   region: 'South',
    //   area: 2095,
    // });

    // Update a document in collection "cities"
    // await updateDoc(doc(db, 'cities', 'HCM'), {
    //   area: increment(50),
    //   updated_at: serverTimestamp(),
    // });

    // Delete a document in collection "cities"
    // await deleteDoc(doc(db, 'cities', 'n5hfPlEL6vmI95q22GKN'));

    // Delete a field in document "cities"
    await updateDoc(doc(db, 'cities', 'HN'), {
      region: deleteField(),
    });
  };

  const write = async () => {
    const batch = writeBatch(db);
    try {
      // Get a new write batch
      const nycRef = doc(db, 'cities', 'LA');
      batch.set(nycRef, { name: 'Los Angeles' });

      // Update the population of 'SF'
      const sfRef = doc(db, 'cities', 'HN');
      batch.update(sfRef, { population: 1000000 });

      // Delete the city 'LA'
      const laRef = doc(db, 'cities', 'HCM');
      batch.delete(laRef);

      // Commit the batch
      await batch.commit();
    } catch (error) {
      console.error(error);
    }
  };

  const getDocument = async () => {
    const docRef = doc(db, 'cities', 'HN');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const getDocuments = async () => {
    const q = query(collection(db, 'cities'));

    const querySnapshot = await getDocs(q);

    let cities: any[] = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
    });

    console.log(cities);
  };

  const getDocumentsInASubCollection = async () => {
    const querySnapshot = await getDocs(collection(db, 'conversations', '1', 'messages'));

    let messages: any[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      messages.push(doc.data());
    });
    console.log(messages);
  };

  const getProfileHandler = async () => {
    const profile = await getProfile({ uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3' });
    console.log('profile', profile);
  };

  const loginHandler = async () => {
    const email = 'tungnt@softech.vn';
    const password = '123456789';
    const user = await signIn({ email, password });
    console.log('user', user);
  };

  const getTasksHandler = async () => {
    const tasks = await getTasks({ uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3' });
    console.log('tasks', tasks);
  };

  const getCommentsHandler = async () => {
    const comments = await getComments({ taskId: 'Nuuj0r5nqSzjAZxW0kcx' });
    console.log('comments', comments);
  };

  const createTaskHandler = async () => {
    try {
      const task = await createTask({
        title: 'Task 16',
        description: 'Description 16',
        startDate: new Date('2024-10-01 00:00:00'),
        dueDate: new Date('2024-10-10 00:00:00'),
        status: 'To do',
        assignee: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        project: 'DG7ODCrWTO0jCSP5tZv8',
      });

      console.log('task', task);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createSubTaskHandler = async () => {
    try {
      const task = await createSubTask({
        taskId: 'kuk8BqYKzuHNkMvuKlze',
        subTask: {
          title: 'Sub Task 2',
          description: 'Sub Task Description 2',
          startDate: new Date('2024-10-01 00:00:00'),
          dueDate: new Date('2024-10-30 00:00:00'),
          status: 'To do',
          assignee: 'g0EZQrVAPGZ5sDA2huMDCRaQbCT2',
          uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        },
      });

      console.log('task', task);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createProjectHandler = async () => {
    createProject({
      name: 'Project 2',
      description: 'Description 2',
      topic: 'Development',
      members: [
        {
          role: 'Tester',
          uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        },
      ],
    });
  };

  const addMembersToProjectHandler = async () => {
    addMembersToProject({
      id: 'DG7ODCrWTO0jCSP5tZv8',
      members: [
        {
          role: 'Tester',
          uid: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
        },
      ],
    });
  };

  const removeMemberFromProjectHandler = async () => {
    removeMemberFromProject({
      id: 'DG7ODCrWTO0jCSP5tZv8',
      memberId: 'dMhAKURQpEXsNr32mFtpN0w1MIE3',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Button title='Create project' onPress={createProjectHandler} />
        <Button title='Add members to project' onPress={addMembersToProjectHandler} />
        <Button title='Remove member to project' onPress={removeMemberFromProjectHandler} />

        <Button title='Login' onPress={loginHandler} />
        <Button title='Get profile' onPress={getProfileHandler} />
        <Button title='Get tasks' onPress={getTasksHandler} />
        <Button title='Get comments' onPress={getCommentsHandler} />
        <Button title='Create task' onPress={createTaskHandler} />
        <Button title='Create sub task' onPress={createSubTaskHandler} />
        <Button title='Add' onPress={add} />
        <Button title='Batch write' onPress={write} />
        <Button title='Get 1 document' onPress={getDocument} />
        <Button title='Get documents' onPress={getDocuments} />
        <Button title='Get documents in a sub collection' onPress={getDocumentsInASubCollection} />

        <Text>City Name = {city.name}</Text>
        {messages.map((message, index) => {
          return <Text key={index}>{message.text}</Text>;
        })}

        <TextInput
          placeholder='Message'
          style={{ width: '100%', height: 54 }}
          onChangeText={(text) => {
            setText(text);
          }}
        />
        <Button
          title='Send'
          onPress={() => {
            addDoc(collection(db, 'messages'), {
              text: text,
              timestamp: serverTimestamp(),
            });
          }}
        />

        <FlatList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamplesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
