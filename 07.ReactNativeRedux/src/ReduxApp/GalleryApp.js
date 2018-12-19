import React from 'react';
import { View } from 'react-native';
import AlbumContainer from './Containers/AlbumContainer';
import PhotoContainer from './Containers/PhotoContainer';

const GalleryApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <PhotoContainer />
    {/* <AlbumContainer /> */}
  </View>
)

export default GalleryApp;