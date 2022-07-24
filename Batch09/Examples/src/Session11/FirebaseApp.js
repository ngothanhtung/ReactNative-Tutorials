import { SafeAreaView } from 'react-native';
import React from 'react';

import './initializeApp';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';
import FirebaseAuthentication from './FirebaseAuthentication';

const FirebaseExample = () => {
  return (
    <SafeAreaView>
      {/* <FirestoreExample /> */}
      {/* <RealtimeExample /> */}
      <FirebaseAuthentication />
    </SafeAreaView>
  );
};

export default FirebaseExample;
