import React, {Component} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';

export default function FormExample() {
  const [email, setEmail] = React.useState('');
  const [emailRequiredError, setRequiredError] = React.useState(false);
  const [fullname, setFullname] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1, padding: 60}}>
      <View>
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          onBlur={() => {
            setRequiredError(email.length === 0);
          }}
          value={email}
        />
        {emailRequiredError && (
          <Text style={{color: 'red'}}>You must enter email</Text>
        )}

        <TextInput
          onChangeText={(text) => {
            setFullname(text);
          }}
          onBlur={() => {}}
          value={fullname}
        />

        <Button
          onPress={() => {
            console.log(email);
          }}
          title="Submit"
        />
      </View>
    </SafeAreaView>
  );
}
