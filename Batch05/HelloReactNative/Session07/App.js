import React from 'react';
import { View } from 'react-native';

import AddDataScreen from './src/CloudFilestore/AddDataScreen';
import ReadDataScreen from './src/CloudFilestore/ReadDataScreen';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <AddDataScreen /> */}
        <ReadDataScreen />
      </View>
    );
  }
}
