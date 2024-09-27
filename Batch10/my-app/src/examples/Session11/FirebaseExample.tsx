import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import { db } from './firebase/initializeApp';
import { onSnapshot, writeBatch, doc, setDoc, getDoc, addDoc, updateDoc, deleteDoc, collection, serverTimestamp, increment, deleteField, query, where, getDocs } from 'firebase/firestore';

type Props = {};

const FirebaseExample = (props: Props) => {
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

  return (
    <View style={styles.container}>
      <Text>City Name = {city.name}</Text>
      <Button title='Add' onPress={add} />
      <Button title='Batch write' onPress={write} />
      <Button title='Get 1 document' onPress={getDocument} />
      <Button title='Get documents' onPress={getDocuments} />
      <Button title='Get documents in a sub collection' onPress={getDocumentsInASubCollection} />

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
    </View>
  );
};

export default FirebaseExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
