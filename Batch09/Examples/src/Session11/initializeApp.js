import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
