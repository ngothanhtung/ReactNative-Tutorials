import React, { Component } from 'react';
import { View, Button } from 'react-native';
import LifeCycleComponent from './LifeCycleComponent';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 0,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.property <= 3 && (
          <LifeCycleComponent property={this.state.property} />
        )}
        <Button
          title='Send props'
          onPress={() => {
            let p = this.state.property + 1;
            this.setState({ property: p });
          }}
        />
      </View>
    );
  }
}
