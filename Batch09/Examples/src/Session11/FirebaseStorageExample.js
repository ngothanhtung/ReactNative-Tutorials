import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { Camera, CameraType } from 'expo-camera';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Button } from 'react-native-paper';
const storage = getStorage();

const FirebaseStorageExample = () => {
  const [status, setStatus] = React.useState('off');
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [progress, setProgress] = React.useState(0);

  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);

  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        {status === 'on' && <Camera ref={cameraRef} ratio='16:9' type={type} style={{ flex: 1 }}></Camera>}
        {status === 'off' && capturedImage && <Image source={{ uri: capturedImage.uri }} style={{ width: '100%', flex: 1 }} resizeMode='cover' />}
      </View>

      {progress > 0 && (
        <View style={{ height: 56, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black' }}>Uploading: {progress.toFixed(0)}%</Text>
        </View>
      )}

      {status === 'on' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              cameraRef.current.takePictureAsync({
                onPictureSaved: async (photo) => {
                  setCapturedImage(photo);
                  setStatus('off');

                  const filename = photo.uri.replace(/^.*[\\/]/, '');
                  const file = photo.uri;

                  const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                      resolve(xhr.response);
                    };
                    xhr.onerror = function (e) {
                      console.log(e);
                      reject(new TypeError('Network request failed'));
                    };
                    xhr.responseType = 'blob';
                    xhr.open('GET', file, true);
                    xhr.send(null);
                  });

                  // Upload to Firebase Storage
                  const storageRef = ref(storage, 'images/' + filename);

                  // Upload the file and metadata
                  const uploadTask = uploadBytesResumable(storageRef, blob);

                  // Register three observers:
                  // 1. 'state_changed' observer, called any time the state changes
                  // 2. Error observer, called on failure
                  // 3. Completion observer, called on successful completion
                  uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                      // Observe state change events such as progress, pause, and resume
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      const progressText = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      setProgress(progressText);
                      console.log('Upload is ' + progressText + '% done');
                      switch (snapshot.state) {
                        case 'paused':
                          console.log('Upload is paused');
                          break;
                        case 'running':
                          console.log('Upload is running');
                          break;
                      }
                    },
                    (error) => {
                      // Handle unsuccessful uploads
                    },
                    () => {
                      // Handle successful uploads on complete
                      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setProgress(0);
                      });
                    },
                  );
                },
              });
            }}
          >
            <Text style={styles.text}> Capture </Text>
          </TouchableOpacity>
        </View>
      )}
      {status === 'off' && (
        <Button
          style={styles.buttonCamera}
          onPress={() => {
            setStatus('on');
          }}
        >
          Camera
        </Button>
      )}
    </View>
  );
};

export default FirebaseStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonCamera: {},

  camera: {
    flex: 1,
  },
  buttonContainer: {
    height: 56,
    backgroundColor: 'black',
    // backgroundColor: 'transparent',
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },

  text: {
    fontSize: 18,
    color: 'white',
  },
});
