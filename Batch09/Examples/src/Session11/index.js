import { View, Text, Button } from 'react-native';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import FirestoreExample from './FirestoreExample';
import RealtimeExample from './RealtimeExample';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";

//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Production: App.tsx
// Initialize Firebase
const firebaseConfig = {
  // CONFIG HERE
};
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

const FirebaseExample = () => {
  return (
    <View>
      {/* <FirestoreExample /> */}
      <RealtimeExample />
    </View>
  );
};

export default FirebaseExample;
