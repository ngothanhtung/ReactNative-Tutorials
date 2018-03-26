import React, { Component } from 'react';
import {
  View, Text, TextInput, Button, Image, ScrollView, CameraRoll,
  StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window');

export default class CameraRollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }
  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 30,
      assetType: 'Photos',
    })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {this.state.photos.map((p, i) => {
              return (
                <View key={i} style={{ paddingTop: 12, alignSelf: 'flex-start' }}>
                  <Image
                    resizeMode='cover'
                    style={{
                      borderRadius: 10,
                      width: (width / 2) - 24,
                      height: 150,
                    }}
                    source={{ uri: p.node.image.uri }}
                  />

                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}