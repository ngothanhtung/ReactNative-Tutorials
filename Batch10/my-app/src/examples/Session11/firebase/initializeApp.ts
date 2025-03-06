import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, initializeFirestore } from 'firebase/firestore';
import { Auth, getAuth, initializeAuth } from 'firebase/auth';
// import { getReactNativePersistence } from 'firebase/auth/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCy5Bfcnr_ZGMvbgWI0TI5ReWApJAN8SKs',
  authDomain: 'reactnative-batch10.firebaseapp.com',
  projectId: 'reactnative-batch10',
  storageBucket: 'reactnative-batch10.appspot.com',
  messagingSenderId: '946356119321',
  appId: '1:946356119321:web:c4ac4d07916f98e1d38788',
};

let firebaseApp: FirebaseApp;
let fireAuth: Auth;
let fireStore: Firestore;
// let fireStorage: FirebaseStorage;

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  fireStore = initializeFirestore(firebaseApp, {
    experimentalForceLongPolling: true,
  });
  fireAuth = initializeAuth(firebaseApp, {});
} else {
  firebaseApp = getApp();
  fireAuth = getAuth();
  fireStore = getFirestore();
}

// Initialize Firebase
export const app = firebaseApp;
export const db = fireStore;
export const auth = fireAuth;
