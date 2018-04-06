import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBawg7fPF3ZcmEfjdYnOmQNIOggM13sOPM",
  authDomain: "aptech-react-native-starter.firebaseapp.com",
  databaseURL: "https://aptech-react-native-starter.firebaseio.com",
  storageBucket: "aptech-react-native-starter.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.EmailAuthProvider();


