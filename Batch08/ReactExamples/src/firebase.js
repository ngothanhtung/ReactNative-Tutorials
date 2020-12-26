import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiu6-sKuPrzSIjF64j6tFFiePpv2209xY',
  authDomain: 'reactnative-firebase-examples.firebaseapp.com',
  databaseURL: 'https://reactnative-firebase-examples.firebaseio.com',
  projectId: 'reactnative-firebase-examples',
  storageBucket: 'reactnative-firebase-examples.appspot.com',
  messagingSenderId: '900117337974',
  appId: '1:900117337974:web:6def85bce6aa75008d4c57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
