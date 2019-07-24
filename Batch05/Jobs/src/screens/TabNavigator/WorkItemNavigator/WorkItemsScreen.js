import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import WorkItems from '../../../modules/WorkItem/components/WorkItems';

export default class WorkItemsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WorkItems />
      </View>
    );
  }
}
