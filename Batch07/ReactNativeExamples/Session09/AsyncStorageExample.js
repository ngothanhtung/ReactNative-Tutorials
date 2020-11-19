import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function AsyncStoreExample() {
  return (
    <SafeAreaView style={{flex: 1, padding: 24}}>
      <Text>Async Storage Example</Text>
      <Button
        title="Save data"
        onPress={async () => {
          const user = {
            username: 'admin',
            email: 'tungnt@softech.vn',
          };
          // Cách dùng Promise với async / await
          await AsyncStorage.setItem('@user', JSON.stringify(user));
          console.log('Save data OK!');

          // Cách dùng Promise với then
          // AsyncStorage.setItem('@user', JSON.stringify(user)).then(() => {
          //   console.log('Save data OK!');
          // });
        }}
      />

      <Button
        title="Read data"
        onPress={async () => {
          // Cách dùng Promise với async / await
          const data = await AsyncStorage.getItem('@user');
          const user = JSON.parse(data);
          console.log(user);
          console.log('Read data OK!');
        }}
      />
    </SafeAreaView>
  );
}
