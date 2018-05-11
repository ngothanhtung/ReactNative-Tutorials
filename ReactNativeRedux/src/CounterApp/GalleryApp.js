import React from 'react';
import { View } from 'react-native';
import AlbumContainer from './Containers/AlbumContainer';

const GalleryApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <AlbumContainer />
  </View>
)

export default GalleryApp;