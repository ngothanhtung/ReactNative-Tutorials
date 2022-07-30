import { SafeAreaView } from 'react-native';
import React from 'react';

import './initializeApp';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';
import FirebaseAuthExample from './FirebaseAuthExample';
import Chat from './Chat';
import FirebaseStorageExample from './FirebaseStorageExample';

const FirebaseExample = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FirestoreExample /> */}
      {/* <RealtimeExample /> */}
      {/* <FirebaseAuthExample /> */}
      {/* <Chat /> */}
      <FirebaseStorageExample />
    </SafeAreaView>
  );
};

export default FirebaseExample;
