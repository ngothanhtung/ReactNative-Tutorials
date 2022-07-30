import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, initializeFirestore } from 'firebase/firestore';
import { Auth, getAuth, initializeAuth } from 'firebase/auth';
import { FirebaseStorage } from 'firebase/storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  // CONFIG HERE
  apiKey: 'AIzaSyCWuUF43c1A1ehTN6FVSvamQ2IfhHtVvnQ',
  authDomain: 'aptech-reactshop.firebaseapp.com',
  projectId: 'aptech-reactshop',
  storageBucket: 'aptech-reactshop.appspot.com',
  messagingSenderId: '292253714744',
  appId: '1:292253714744:web:12cda016e7be70f0db19cd',
};

let firebaseApp: FirebaseApp;
let fireAuth: Auth;
let fireStore: Firestore;
// let fireStorage: FirebaseStorage;

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  fireStore = initializeFirestore(firebaseApp, {});
  fireAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseApp = getApp();
  fireAuth = getAuth();
  fireStore = getFirestore();
}

// Initialize Firebase
export const app = firebaseApp;
export const db = fireStore;
export const auth = fireAuth;
