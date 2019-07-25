import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import firebase from 'react-native-firebase';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      uploading: false,
    };
  }
  render() {
    return (
      <View>
        <Text> {this.state.percent} </Text>
        <Button
          title='Upload'
          onPress={() => {
            DocumentPicker.pick().then(async (res) => {
              console.log(res);
              // FIREBASE STORGAE
              const path = res.uri;
              const ref = firebase.storage().ref('/uploads/' + res.name);
              this.setState({ uploading: true, percent: 0 });
              const unsubscribe = ref.putFile(path).on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                async (snapshot) => {
                  // console.log(snapshot);
                  var percent = 0;
                  percent = snapshot.bytesTransferred / snapshot.totalBytes;
                  await this.setState({ percent: percent });
                  if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                    // complete
                    await this.setState({ percent: 100 });
                    await this.setState({ uploading: false });
                  }
                },
                (error) => {
                  unsubscribe();
                  console.error(error);
                  this.setState({ uploading: false });
                },
              );
            });
          }}
        />
      </View>
    );
  }
}
