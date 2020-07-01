import React, {useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';

function AuthExample() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  // componentDidMount
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // componentWillUnmount
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView>
        <Text>Login or Register</Text>
        <Button
          title="Login"
          onPress={() => {
            auth()
              .signInWithEmailAndPassword('tungnt@softech.vn', '123456789')
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            auth()
              .createUserWithEmailAndPassword(
                'sarah.lane@gmail.com',
                'SuperSecretPassword!',
              )
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                console.error(error);
              });
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Welcome {user.email}</Text>
      <Button
        title="Log out"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </SafeAreaView>
  );
}

export default AuthExample;
