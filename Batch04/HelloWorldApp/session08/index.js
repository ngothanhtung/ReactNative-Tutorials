import React, { Component } from 'react';
import { View, Button } from 'react-native';
import NewVersionComponent from './NewVersionComponent';
import OldVersionComponent from './OldVersionComponent';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 0
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          (this.state.property <= 3 || this.state.property >= 5) &&
          <NewVersionComponent property={this.state.property} />
        }
        <Button title="Send props" onPress={() => {
          this.setState({ property: this.state.property + 1 });
        }} />
      </View>
    );
  }
}
