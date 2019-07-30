import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'react-native-firebase';

export default class ImagePickerScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Button
          title='Open camera and upload'
          onPress={() => {
            console.log(ImagePicker);
            // ImagePicker.openPicker({ width: 300, height: 400, cropping: true }).then(async (image) => {
            //   console.log(image);

            //   // FIREBASE STORGAE
            //   // const path = image.uri;
            //   // const ref = firebase.storage().ref('/uploads/' + image.name);
            //   // this.setState({ uploading: true, percent: 0 });
            //   // const unsubscribe = ref.putFile(path).on(
            //   //   firebase.storage.TaskEvent.STATE_CHANGED,
            //   //   async (snapshot) => {
            //   //     // console.log(snapshot);
            //   //     var percent = 0;
            //   //     percent = snapshot.bytesTransferred / snapshot.totalBytes;
            //   //     await this.setState({ percent: percent });
            //   //     if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            //   //       // complete
            //   //       await this.setState({ percent: 100 });
            //   //       await this.setState({ uploading: false });
            //   //     }
            //   //   },
            //   //   (error) => {
            //   //     unsubscribe();
            //   //     console.error(error);
            //   //     this.setState({ uploading: false });
            //   //   },
            //   // );
            // });
          }}
        />
      </View>
    );
  }
}
