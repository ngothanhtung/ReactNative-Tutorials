import { SafeAreaView } from 'react-native';
import React from 'react';

import './initializeApp';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';

const FirebaseExample = () => {
  return (
    <SafeAreaView>
      {/* <FirestoreExample /> */}
      <RealtimeExample />
    </SafeAreaView>
  );
};

export default FirebaseExample;
