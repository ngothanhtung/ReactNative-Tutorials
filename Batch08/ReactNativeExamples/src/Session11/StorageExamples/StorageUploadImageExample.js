/* eslint-disable react-native/no-inline-styles */
// README:
// https://github.com/ivpusic/react-native-image-crop-picker
import React from 'react';
import { View, SafeAreaView, Text, Button, Alert, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const { height } = Dimensions.get('screen');

export default function StorageUploadImageExample() {
  const [imageUrl, setImageUrl] = React.useState(null);
  const [percent, setPercent] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <Text>Storage Example</Text>
      <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 12 }} />
      <Text>{percent}%</Text>
      <View height={12} />
      <Button
        title="Take a picture & Upload"
        onPress={() => {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
          }).then(async (image) => {
            // create bucket storage reference to not yet existing image
            console.log(image);
            if (image) {
              const { path } = image;
              const filename = path.replace(/^.*[\\/]/, '');
              const reference = storage().ref('images/' + filename);

              // uploads file
              const task = reference.putFile(path);

              // uploading
              task.on('state_changed', (taskSnapshot) => {
                let currentPercent = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
                // console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
                setPercent(currentPercent);
              });

              // completed
              task.then(() => {
                console.log('Image uploaded to the bucket!');
                Alert.alert('Upload', 'picture uploaded!');
                storage()
                  .ref('images/' + filename)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url);
                    setImageUrl(url);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
            }
          });
        }}
      />
      <View height={12} />
      <Button
        title="Upload from gallery"
        onPress={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
          }).then(async (image) => {
            // create bucket storage reference to not yet existing image
            console.log(image);
            if (image) {
              const { path } = image;
              const filename = path.replace(/^.*[\\/]/, '');
              const reference = storage().ref('images/' + filename);

              // uploads file
              const task = reference.putFile(path);

              // uploading
              task.on('state_changed', (taskSnapshot) => {
                let currentPercent = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100;
                // console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
                setPercent(currentPercent);
              });

              // completed
              task.then(() => {
                console.log('Image uploaded to the bucket!');
                Alert.alert('Upload', 'picture uploaded!');
                storage()
                  .ref('images/' + filename)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url);
                    setImageUrl(url);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
            }
          });
        }}
      />

      {imageUrl && (
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ marginTop: 12, width: '100%', height: height / 3 }}
          resizeMode="cover"
        />
      )}
    </SafeAreaView>
  );
}
