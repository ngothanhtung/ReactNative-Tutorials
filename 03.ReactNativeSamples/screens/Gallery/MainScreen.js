import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AlbumScreen from './AlbumScreen';
import PicsumScreen from './PicsumScreen';
import PhotoScreen from './PhotoScreen';
import SwiperSceen from './SwiperScreen';

export default class MainScreen extends React.Component {
  Stack = createStackNavigator(
    {
      PicsumScreen: { screen: PicsumScreen },
      SwiperSceen: { screen: SwiperSceen },
      
      AlbumScreen: { screen: AlbumScreen },
      PhotoScreen: { screen: PhotoScreen },
      
    },
    {
      initialScreen: SwiperSceen
    }
  );

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <this.Stack />
    );
  }
}