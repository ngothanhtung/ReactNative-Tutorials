import React from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function FireStoreExample() {
  const addData = () => {
    firestore()
      .collection('Users')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <View>
      <Text>Firestore Example</Text>
      <Button title="Add data" onPress={addData} />
    </View>
  );
}
