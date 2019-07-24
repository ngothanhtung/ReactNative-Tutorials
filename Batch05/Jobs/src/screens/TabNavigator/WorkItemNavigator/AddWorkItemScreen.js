import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import AddWorkItem from '../../../modules/WorkItem/components/AddWorkItem';

export default class AddWorkItemcreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddWorkItem />
      </View>
    );
  }
}
