/* eslint-disable react-native/no-inline-styles */
// README:
// https://github.com/ivpusic/react-native-image-crop-picker
import React from 'react';
import {View, SafeAreaView, Text, Button, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default function StorageUploadImageExample() {
  return (
    <SafeAreaView style={{flex: 1, padding: 12}}>
      <Text>Storage Example</Text>
      <View style={{height: 1, backgroundColor: 'gray', marginVertical: 12}} />
      <Button
        title="Upload a picture"
        onPress={() => {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(async (image) => {
            // create bucket storage reference to not yet existing image
            console.log(image);
            if (image) {
              console.log(image);
              const {path} = image;
              const reference = storage().ref('car.jpg');
              // uploads file
              await reference.putFile(path);
              Alert.alert('Upload', 'picture uploaded!');
            }
          });
        }}
      />
    </SafeAreaView>
  );
}
