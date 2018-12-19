import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Camera from 'react-native-camera';
export default class CaptureScreen extends Component {
  render() {
    return (
      <View>
        <Camera
          ref={(component) => { this.camera = component; }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.back}
          captureMode={Camera.constants.CaptureMode.still}
          captureTarget={Camera.constants.CaptureTarget.memory}
          captureQuality={Camera.constants.CaptureQuality.low}
          playSoundOnCapture
        >

        </Camera>
      </View>
    );
  }
}
