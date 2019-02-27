import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Label extends Component {
  render() {
    return (
      <Text style={{ fontSize: 32, color: 'blue', alignSelf: 'center' }}> {this.props.count} </Text>
    )
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  count: state.counterReducer.count
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // increaseCount: (number) => dispatch(increaseCount(number)),
  // decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Label);


