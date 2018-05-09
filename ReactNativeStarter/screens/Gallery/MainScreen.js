import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AlbumScreen from './AlbumScreen';
import PicsumScreen from './PicsumScreen';
import PhotoScreen from './PhotoScreen';

export default class MainScreen extends React.Component {
  Stack = createStackNavigator({
    PicsumScreen: {
      screen: PicsumScreen
    },
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