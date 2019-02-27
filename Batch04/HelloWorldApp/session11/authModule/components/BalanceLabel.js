import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';

class BalanceLabel extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'violet' }}> {this.props.balance} </Text>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  balance: state.atmReducer.balance
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // withdraw: (money) => dispatch(withdraw(money)),
  // deposite: (money) => dispatch(deposite(money)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceLabel);

