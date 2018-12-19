import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class PeopleComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      leave: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps - State', state);
    console.log('getDerivedStateFromProps - Props', props);
    // No state update necessary
    if (props.appData.data.length > 0) {
      return ({
        leave: true
      });
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.leave) {
      this.props.navigation.navigate('MainScreen');
    }
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> PEOPLE </Text>
        <Button title="Fetch" onPress={() => {
          this.props.fetchPeople();
        }} />
        {/* <Text>
          FETCH: {this.props.appData.isFetching.toString()}
        </Text> */}
      </View>
    );
  }
}
