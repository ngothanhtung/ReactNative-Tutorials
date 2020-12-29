import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneAuthExample() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  // If null, no SMS has been sent

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle user state changes
  function onAuthStateChanged(u) {
    console.log(u);
    setUser(u);
    if (initializing) setInitializing(false);
  }

  // componentDidMount
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // componentWillUnmount
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (user) {
    return (
      <SafeAreaView>
        <Text>Welcome {user.phoneNumber}</Text>
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

  if (!confirm) {
    return <Button title="Phone Number Sign In" onPress={() => signInWithPhoneNumber('+84905157803')} />;
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}
