import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';
import * as ActionTypes from '../actions/types';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Counter extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', padding: 12 }}>
          <View style={{ flex: 1 }}>
            <Button title="Decrease" onPress={() => {
              this.props.giam(1);
            }} />
          </View>
          <Text style={{ fontSize: 32, color: 'red' }}> {this.props.biendem} </Text>
          <View style={{ flex: 1 }}>
            <Button title="Increase" onPress={() => {
              this.props.tang(1);
            }} />
          </View>
        </View>
      </View>
    )
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  biendem: state.counterReducer.count
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // tang: (number) => dispatch(increaseCount(number)),
  // giam: (number) => dispatch(decreaseCount(number)),
  tang: (number) => dispatch({
    type: ActionTypes.INCREASE_COUNT,
    number: number
  }),
  giam: (number) => dispatch({
    type: ActionTypes.DECREASE_COUNT,
    number: number
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


