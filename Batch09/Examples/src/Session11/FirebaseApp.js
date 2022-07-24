import { SafeAreaView } from 'react-native';
import React from 'react';

import './initializeApp';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';
import FirebaseAuthentication from './FirebaseAuthentication';
import Chat from './Chat';

const FirebaseExample = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FirestoreExample /> */}
      {/* <RealtimeExample /> */}
      <FirebaseAuthentication />
      <Chat />
    </SafeAreaView>
  );
};

export default FirebaseExample;
