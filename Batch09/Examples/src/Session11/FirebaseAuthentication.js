import { Button, Platform, Text, View } from 'react-native';
import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export function FirebaseAuthentication() {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
      console.log('User is signed out');
    }
  });

  return (
    <View>
      <Text>{auth.currentUser?.uid}</Text>

      <Button
        title='Add new user'
        onPress={() => {
          createUserWithEmailAndPassword(auth, 'hungtv@softech.vn', '123456789')
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }}
      />

      <Button
        title='Sign in'
        onPress={() => {
          signInWithEmailAndPassword(auth, Platform.OS === 'ios' ? 'tungnt@softech.vn' : 'hungtv@softech.vn', '123456789')
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }}
      />

      <Button
        title='Sign out'
        onPress={() => {
          signOut(auth)
            .then((result) => {})
            .catch((err) => {});
        }}
      />
    </View>
  );
}

export default FirebaseAuthentication;
