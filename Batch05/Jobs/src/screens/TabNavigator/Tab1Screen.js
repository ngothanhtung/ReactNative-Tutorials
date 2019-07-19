import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import WorkItems from '../../modules/WorkItem/components/WorkItems';

export default class Tab1Screen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <Text> Tab1Screen </Text>
        <Button
          mode='contained'
          onPress={() => {
            this.props.navigation.openDrawer();
          }}>
          Open Drawer
        </Button> */}
        <WorkItems />
      </SafeAreaView>
    );
  }
}
