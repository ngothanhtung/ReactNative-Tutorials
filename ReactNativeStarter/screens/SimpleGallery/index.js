import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AlbumScreen from './AlbumScreen';
import PhotoScreen from './PhotoScreen';

export default class SimpleGallery extends React.Component {
  Stack = createStackNavigator({
    AlbumScreen: {
      screen: AlbumScreen
    },
    PhotoScreen: {
      screen: PhotoScreen
    },
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <this.Stack />
    );
  }
}